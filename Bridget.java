import java.util.ArrayList;
import tester.*;
import javalib.impworld.*;
import java.awt.Color;
import javalib.worldimages.*;

//to represent a cell
class Cell {

  //pink, magenta or white
  Color color; 

  // what can the cell connect to
  ArrayList<Cell> connections;

  // is this cell visited
  boolean visited;

  Cell(Color color) {
    this.color = color;
    this.connections = new ArrayList<Cell>();
    this.visited = false;
  }

  // returns a drawn out version of a cell
  public WorldImage drawCell() {
    return new RectangleImage(30, 30, OutlineMode.SOLID, this.color);
  }

  // EFFECT: adds the connections to the cell
  // connect the cell to the given cell
  void addConnections(Cell nextCell) {
    this.connections.add(nextCell);
  }
}

//To represent the game
class Bridgit extends World {
  // size of the game board (n x n)
  int size;
  ArrayList<ArrayList<Cell>> cells;
  Color currentColor;

  // constructor for starting the game
  Bridgit(int size) {
    if (isValid(size)) {
      this.size = size;
      this.cells = new ArrayList<>();
      this.currentColor = Color.magenta;
      initializeBoard();
    } else {
      throw new IllegalArgumentException("invalid grid size");
    }
  }

  // is this size valid?
  boolean isValid(int size) {
    return size >= 3 && size % 2 == 1;
  }

  // EFFECT: create the game board of the given size and add connections
  // initializes the board
  void initializeBoard() {
    for (int i = 0; i < size; i++) {
      ArrayList<Cell> row = new ArrayList<>();
      for (int j = 0; j < size; j++) {
        Color cellColor = initialColor(i, j);
        Cell cell = new Cell(cellColor);
        row.add(cell); // add the cell to the row
      }
      cells.add(row); // add the row to the cells
    }

    // initializes the connections
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        // get the current cell
        Cell cell = cells.get(i).get(j);
        // if i not in top row
        if (i > 0) {
          // add connection to the cell above
          cell.addConnections(cells.get(i - 1).get(j));
        }
        if (i < size - 1) {
          // add connection to the cell below
          cell.addConnections(cells.get(i + 1).get(j));
        }
        if (j > 0) {
          // add connection to the cell on the left
          cell.addConnections(cells.get(i).get(j - 1));
        }
        if (j < size - 1) {
          // add connection to the cell on the right
          cell.addConnections(cells.get(i).get(j + 1));
        }
      }
    }
  }

  // initialize the color
  Color initialColor(int row, int col) {
    if (row % 2 == 1 && col % 2 == 0) {
      return Color.pink;
    } else if (row % 2 == 0 && col % 2 == 1) {
      return Color.magenta;
    } else {
      return Color.white;
    }
  }


  // DFS for win method
  boolean checkForWinDFS(int row, int col, Color curr, ArrayList<ArrayList<Boolean>> visited) {
    // check for out of bounds
    if (row < 0 || row >= size || col < 0 || col >= size) {
      return false;
    }

    // check if cell visited or current color
    if (visited.get(row).get(col) || cells.get(row).get(col).color != curr) {
      return false;
    }

    visited.get(row).set(col, true);

    // check for the win state based on last clicked cell
    if ((curr == Color.pink && col == size - 1) 
        || (curr == Color.magenta && row == size - 1)) {
      return true;
    }

    // look through connections
    for (Cell neighbor : cells.get(row).get(col).connections) {
      int neighborRow = -1;
      int neighborCol = -1;

      // find the neighbor's row and column
      for (int i = 0; i < cells.size(); i++) {
        if (cells.get(i).contains(neighbor)) {
          neighborRow = i;
          neighborCol = cells.get(i).indexOf(neighbor);
          break;
        }
      }

      // recur
      if (neighborRow >= 0 && neighborRow < size && neighborCol >= 0 && neighborCol < size) {
        if (checkForWinDFS(neighborRow, neighborCol, curr, visited)) {
          return true;
        }
      }
    }
    return false;
  }


  // check for win based on current color
  boolean checkForWin() {
    ArrayList<ArrayList<Boolean>> visitedCells = new ArrayList<>();
    for (int i = 0; i < size; i++) {
      ArrayList<Boolean> row = new ArrayList<>();
      for (int j = 0; j < size; j++) {
        row.add(false);
      }
      visitedCells.add(row);
    }

    if (currentColor == Color.pink) {
      // check for win horizontal, pink
      for (int i = 0; i < size; i++) {
        if (checkForWinDFS(i, 0, Color.pink, visitedCells)) {
          return true;
        }
      }
    } else {
      // check for win vertical, magenta 
      for (int j = 0; j < size; j++) {
        if (checkForWinDFS(0, j, Color.magenta, visitedCells)) {
          return true;
        }
      }
    }

    return false;
  }

  // initializes the visited list for testing 
  ArrayList<ArrayList<Boolean>> vistedForTesting() {
    ArrayList<ArrayList<Boolean>> visited = new ArrayList<>();
    for (int i = 0; i < size; i++) {
      ArrayList<Boolean> row = new ArrayList<>();
      for (int j = 0; j < size; j++) {
        row.add(false);
      }
      visited.add(row);
    }
    return visited;
  }

  // EFFECT: handle the mouse presses 
  // mouse handler method, check for win after press
  public void onMousePressed(Posn pos) {
    int col = pos.x / 30; 
    int row = pos.y / 30; 

    if (cellClickValid(row, col) && canChange(row, col)) {
      Cell clickedCell = cells.get(row).get(col);
      clickedCell.color = currentColor;
    }

    if (checkForWin()) {
      if (currentColor == Color.magenta) {
        this.endOfWorld("Magenta Wins!");
      } else {
        this.endOfWorld("Pink Wins!");
      }
    } else {
      // switches the turns
      if (currentColor == Color.magenta) {
        currentColor = Color.pink;
      } else {
        currentColor = Color.magenta;
      }
    }
  }

  // can this cell be changed?
  boolean canChange(int row, int col) {
    return row > 0 && row < size - 1 && col > 0 && col < size - 1
        && cells.get(row).get(col).color == Color.white;
  }

  // is this clicked cell on the game board?
  boolean cellClickValid(int row, int col) {
    return row >= 0 && row < size && col >= 0 && col < size;
  }

  // override last scene
  public WorldScene lastScene(String s) {
    WorldScene scene = this.makeScene();
    scene.placeImageXY(new TextImage(s, 20, Color.black), size * 30 / 2, size * 30 / 2);
    return scene;
  }

  // draws the scene
  public WorldScene makeScene() {
    int sqSize = 30;
    WorldScene scene = new WorldScene(size * sqSize, size * sqSize);

    // draw each cell in the scene
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        Cell cell = cells.get(i).get(j);
        WorldImage cellDraw = cell.drawCell();
        scene.placeImageXY(cellDraw, j * sqSize + sqSize / 2, i * sqSize + sqSize / 2);
      }
    }
    return scene;
  }
}


//examples for testing
class ExampleBridgit {

  //test the game
  void testGame(Tester t) {
    Bridgit b = new Bridgit(11);
    b.bigBang(b.size * 30, b.size * 30);
  }

  // example data
  Cell cell1;
  Cell cell2;

  // init data
  void initData() {
    cell1 = new Cell(Color.pink); 
    cell2 = new Cell(Color.magenta);
  }

  // test the drawCell method
  void testDrawCell(Tester t) {
    this.initData();
    // draw a pink cell
    t.checkExpect(this.cell1.drawCell(), 
        new RectangleImage(30, 30, OutlineMode.SOLID, Color.pink));
    // draw a magenta cell
    t.checkExpect(this.cell2.drawCell(), 
        new RectangleImage(30, 30, OutlineMode.SOLID, Color.magenta));
  }

  // test the addConnections method
  void testAddConnections(Tester t) {
    this.initData();
    this.cell1.addConnections(this.cell2);
    // cell1 and cell2 are now connected
    t.checkExpect(this.cell1.connections.get(0), this.cell2);
  }

  // test the makeScene method
  void testMakeScene(Tester t) {
    // make a 3x3 bridgit
    Bridgit b = new Bridgit(3);
    WorldScene scene = b.makeScene();
    // check for the correct width and height of the scene
    t.checkExpect(scene.width, 90);
    t.checkExpect(scene.height, 90);
    // check that cell colors are assigned correctly
    // get the (0,0) cell, should be white
    Cell cell00 = b.cells.get(0).get(0);
    t.checkExpect(cell00.color, Color.white);
    // get the (0, 1) cell, should be magenta
    Cell cell01 = b.cells.get(0).get(1);
    t.checkExpect(cell01.color, Color.magenta);
    // get the (1, 0) cell, should be pink
    Cell cell10 = b.cells.get(1).get(0);
    t.checkExpect(cell10.color, Color.pink);
  }

  // test the initialColor method
  void testInitialColor(Tester t) {
    // make a 3x3 bridgit
    Bridgit b = new Bridgit(3);
    // check that the white space is in the correct position
    t.checkExpect(b.initialColor(0, 0), Color.white);
    // check that the magenta space is in the correct position
    t.checkExpect(b.initialColor(0, 1), Color.magenta);
    // check that the pink space is in the correct position
    t.checkExpect(b.initialColor(1, 0), Color.pink);
  }

  // test the initializeBoard method
  void testInitializeBoard(Tester t) {
    // make a 3x3 bridgit
    Bridgit b = new Bridgit(3);
    // check that the correct number of rows are initialized
    // 2 rows for a 2x2 bridgit
    t.checkExpect(b.cells.size(), 3);
    // check the correct number of columns are initialized
    // 2 columns for a 2x2 bridgit
    t.checkExpect(b.cells.get(0).size(), 3);

    // check that the connections are intialized
    // 2 connections on (0,0) cell
    Cell cell00 = b.cells.get(0).get(0);
    t.checkExpect(cell00.connections.size(), 2);
    // 4 connections on (1,1) cell
    Cell cell11 = b.cells.get(1).get(1);
    t.checkExpect(cell11.connections.size(), 4);
    // 3 connections on (0,1) cell
    Cell cell01 = b.cells.get(0).get(1);
    t.checkExpect(cell01.connections.size(), 3);
  }


  // test the isValid method
  void isValid(Tester t) {
    // make a valid 3x3 bridgit
    Bridgit b3 = new Bridgit(3);
    t.checkExpect(b3.isValid(3), true);
    // make an invalid bridgit, size must be >= 3
    Bridgit b1 = new Bridgit(1);
    t.checkExpect(b1.isValid(1), false);
    // make an invalid bridgit, must be odd
    Bridgit b4 = new Bridgit(4);
    t.checkExpect(b4.isValid(4), false);
  }

  // test the cellClickValid method
  void testCellClickValid(Tester t) {
    // make a 3x3 bridgit
    Bridgit b3 = new Bridgit(3);
    // invalid click, out of bounds
    t.checkExpect(b3.cellClickValid(60, 70), false);
    // valid click
    t.checkExpect(b3.cellClickValid(0, 0), true);
    // invalid click, edge
    t.checkExpect(b3.cellClickValid(3, 3), false);
    // valid click
    t.checkExpect(b3.cellClickValid(2, 2), true);
  }

  // test the canChange method
  void testCanChange(Tester t) {
    // make a 3x3 bridgit
    Bridgit b3 = new Bridgit(3);
    // cannot change, color
    t.checkExpect(b3.canChange(0, 0), false);
    // can change, white
    t.checkExpect(b3.canChange(1, 1), true);
    // cannot change, color
    t.checkExpect(b3.canChange(2, 1), false);
  }


  //test the lastScene method
  void testLastScene(Tester t) {
    // make a 3x3 bridgit
    Bridgit b = new Bridgit(3); 

    // force pink win
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30));  

    // force the game to check for win
    b.checkForWin();

    // create the current scene
    WorldScene endScene = b.makeScene();

    // create the end text image
    TextImage textImage = new TextImage("Pink Wins!", 20, Color.black);

    // place the text image current scene
    endScene.placeImageXY(textImage, b.size * 30 / 2, b.size * 30 / 2);

    // check if matches last scene
    t.checkExpect(endScene, b.lastScene("Pink Wins!"));
  }


  //test the checkForWinDFS method
  void testCheckForWinDFS(Tester t) {
    // make a 5x5 bridgit
    Bridgit b = new Bridgit(5);

    // pink wins with horizontal line
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30));
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(90, 30));

    t.checkExpect(b.checkForWinDFS(1, 0, Color.pink, b.vistedForTesting()), true);

    // pink wins with diagonal line
    b = new Bridgit(5);
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30)); 
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(60, 60)); 
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(90, 90)); 

    t.checkExpect(b.checkForWinDFS(1, 0, Color.pink, b.vistedForTesting()), true);

    // magenta wins with vertical line
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 30));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 90));

    t.checkExpect(b.checkForWinDFS(0, 1, Color.magenta, b.vistedForTesting()), true);

    // magenta wins with diagonal line
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 30));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(60, 60));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(90, 90));

    t.checkExpect(b.checkForWinDFS(0, 1, Color.magenta, b.vistedForTesting()), true);

    // no winner
    b = new Bridgit(5);

    t.checkExpect(b.checkForWinDFS(0, 0, Color.pink, b.vistedForTesting()), false);
  }


  // test the checkForWin method
  void testCheckForWin(Tester t) {

    // pink wins with horizontal line
    Bridgit b = new Bridgit(5);
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30)); 
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(90, 30)); 

    t.checkExpect(b.checkForWin(), true);

    // pink wins with diagonal line
    b = new Bridgit(5);
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30)); 
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(60, 60)); 
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(90, 90)); 

    t.checkExpect(b.checkForWin(), true);

    // magenta wins with vertical line
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 30));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 90));

    t.checkExpect(b.checkForWin(), true);

    // magenta wins with diagonal line
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 30));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(60, 60));
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(90, 90));

    t.checkExpect(b.checkForWin(), true);

    // no winner
    b = new Bridgit(5);
    t.checkExpect(b.checkForWin(), false);
  }


  //test the onMousePress method
  void testOnMousePressed(Tester t) {

    // valid pink click
    Bridgit b = new Bridgit(5);
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30, 30)); 
    t.checkExpect(b.cells.get(1).get(1).color, Color.pink);

    // valid magenta click
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(30, 30)); 
    t.checkExpect(b.cells.get(1).get(1).color, Color.magenta);

    // invalid click, corner cell
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(0,0));
    t.checkExpect(b.cells.get(0).get(0).color, Color.white);
    // invalid click, cell already magenta
    b = new Bridgit(5);
    b.currentColor = Color.pink;
    b.onMousePressed(new Posn(30,60));
    t.checkExpect(b.cells.get(2).get(1).color, Color.magenta);
    // invalid click, cell already pink
    b = new Bridgit(5);
    b.currentColor = Color.magenta;
    b.onMousePressed(new Posn(60,30));
    t.checkExpect(b.cells.get(1).get(2).color, Color.pink);
  }
}