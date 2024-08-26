import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
import tester.*;
import javalib.impworld.*;
import java.awt.Color;
import javalib.worldimages.*;


// to represent an individual tile
class Tile {
  // the number on the tile, use 0 to represent the space
  int value;

  // random number generator
  Random rand = new Random();

  Tile(int value) {
    this.value = value;
  }

  // constructor for randomness
  Tile(Random rand) {
    this.rand = rand;
  }

  // draws a single tile 
  // returns black tile for valueof 0
  public WorldImage drawTile() {
    if (this.value == 0) {
      return new RectangleImage(30, 30, OutlineMode.SOLID, Color.black);
    } else {
      return new OverlayImage(
          new TextImage(String.valueOf(this.value), 20, Color.white),
          new RectangleImage(30, 30, OutlineMode.SOLID, Color.green));     
    }
  }

  // Draws this tile onto the background at the specified logical coordinates
  WorldScene drawAt(int col, int row, WorldScene background) {
    int tileSize = 30; 
    int x = col * tileSize + tileSize / 2; 
    int y = row * tileSize + tileSize / 2; 
    background.placeImageXY(this.drawTile(), x, y);
    return background;
  }
}

// to represent the game
class FifteenGame extends World {
  // represents the rows of tiles
  ArrayList<ArrayList<Tile>> tiles;
  Random rand;


  //constructor for randomness testing
  FifteenGame(Random rand) {
    this.rand = rand;  
    this.tiles = new ArrayList<>();
    initialTilesTesting();
  }

  // constructor for initializing the tiles
  FifteenGame() {
    this.tiles = new ArrayList<>();
    initialTiles();
  }

  //possible numbers for tiles
  ArrayList<Integer> nums = 
      (new ArrayList<Integer>(
          Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)));

  ArrayList<ArrayList<Tile>> initialTiles() {
    int index = 0;
    Collections.shuffle(nums);

    // initiliazes the tiles
    for (int row = 0; row < 4; row = row + 1) {
      ArrayList<Tile> rowTiles = new ArrayList<>();
      for (int col = 0; col < 4; col = col + 1) {
        Tile tile = new Tile(new Random());
        tile.value = nums.get(index);
        rowTiles.add(tile);
        index = index + 1;
      }
      tiles.add(rowTiles);
    } 
    return tiles;
  }

  // to test initialTiles and makeScene
  void initialTilesTesting() {
    int index = 0;
    Collections.shuffle(nums, new Random(2));

    // initiliazes the tiles
    for (int row = 0; row < 4; row = row + 1) {
      ArrayList<Tile> rowTiles = new ArrayList<>();
      for (int col = 0; col < 4; col = col + 1) {
        Tile tile = new Tile(new Random(2));
        tile.value = nums.get(index);
        rowTiles.add(tile);
        index = index + 1;
      }
      tiles.add(rowTiles);
    } 
  }


  // draws the game
  public WorldScene makeScene() { 
    WorldScene canvas = new WorldScene(300, 300);
    int indexTile = 0;
    int indexCol = 0;
    int indexRow = 0;

    while (indexRow < tiles.size()) {
      ArrayList<Tile> currList = tiles.get(indexRow);
      Tile currTile = currList.get(indexCol);
      canvas = currTile.drawAt(indexCol, indexRow, canvas);


      indexTile = indexTile + 1;
      indexCol = indexCol + 1;
      if (indexCol >= currList.size()) {
        indexCol = 0;
        indexRow = indexRow + 1;
      }
    }
    return canvas;
  }
}



// handles keystrokes
/* public void onKeyEvent(String k) {
    if (k.equals(u)) {
      // undo the move, extra credit?
    }
    else if (k.equals("up")) {

    }
  }
}
 */

class ExampleFifteenGame {
  void testGame(Tester t) {
    FifteenGame g = new FifteenGame();
    g.bigBang(120, 120); 
  }

  Tile tile0 = new Tile(0);
  Tile tile1 = new Tile(1);
  Tile tile2 = new Tile(2);

  FifteenGame game = new FifteenGame(new Random(2));

  // to test the draw tile method
  void testDrawTile(Tester t) {
    // drawing the 0 tile
    t.checkExpect(this.tile0.drawTile(), 
        new RectangleImage(30, 30, OutlineMode.SOLID, Color.black));
    // drawing a tile with a value
    t.checkExpect(this.tile1.drawTile(), 
        new OverlayImage(
            new TextImage("1", 20, Color.white),
            (new RectangleImage(30, 30, OutlineMode.SOLID, Color.green))));      
  }

  // to test the drawAt method
  void testDrawAt(Tester t) {
    WorldScene back = new WorldScene(300, 300);
    WorldScene back1 = this.tile1.drawAt(0, 0, back);
    WorldScene back2 = this.tile0.drawAt(0, 0, back1);
    //tests for a tile with a value between 1-15
    t.checkExpect(this.tile1.drawAt(0, 0, back) == back1,
        true);
    //tile with 0 value on top of a worldscene with a tile
    t.checkExpect(this.tile0.drawAt(0, 0, back1) == back2,
        true); 
  }


  // to test the makeScene method
  void testInitialTilesAndMakeScene(Tester t) { 
    // the seeded random (Random(2)) always yields the first tile 
    // with a value of 13, therefore the getting the first index of
    // the row and the tile should yield tile 13
    this.game.initialTilesTesting();
    t.checkExpect(this.game.tiles.get(0).get(0), new Tile(13));
    // the seeded Random has the first row as tiles 13, 5, 7, and 14
    t.checkExpect(this.game.tiles.get(0), 
        (Arrays.asList(new Tile(13), new Tile(5), new Tile(7), new Tile(14))));   
  }
}
