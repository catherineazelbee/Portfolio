import tester.Tester;
import javalib.worldimages.*;
import java.awt.Color;
import java.util.Random;

import javalib.funworld.*;

// to represent a fish
interface IFish {

}

//abstract class for player and enemy fish
abstract class AFish implements IFish {
  int x;
  int y;
  Color color;
  int radius;

  //constructor
  AFish(int x, int y, Color color, int radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
  }

  AFish() {
    this.x = 300;
    this.y = 200;
    this.color = Color.red;
    this.radius = 5;
  }

  /*
  TEMPLATE
  FIELDS:
  ... this.x ...               -- int
  ... this.y ...               -- int
  ... this.color               -- color
  ... this.radius ...          -- int

  METHODS

   */

}

// to represent a player fish
class PFish extends AFish {

  PFish(int x, int y, Color color, int radius) {
    super(x, y, color, radius);

  }

  // constructor for creating initial player fish
  PFish() {
    this.x = 300;
    this.y = 200;
    this.color = Color.red;
    this.radius = 5;

  }

  // draw this Pfish as a circle
  public WorldImage draw() {
    return new CircleImage(this.radius, "solid", this.color);
  }

  /*
  TEMPLATE
  FIELDS:
  ... this.x ...               -- int
  ... this.y ...               -- int
  ... this.color               -- color
  ... this.radius ...          -- int

  METHODS
  ... this.draw() ...          -- WorldImage
   */


}

// to represent an enemy fish
class EFish extends AFish {
  int dir;// 0 is left, 1 is right
  Random rand;

  EFish(Color color, int dir, int radius) {
    this.dir = dir;
    this.rand = new Random();
    this.x = rand.nextInt(600);
    this.y = rand.nextInt(400);  
    this.color = color;
    this.radius = radius;
  }

  // constructor: all random except for, color(remains constant)
  EFish() {
    this.rand = new Random();
    this.x = rand.nextInt(600);
    this.y = rand.nextInt(400);
    this.color = Color.blue;
    this.radius = 1 + rand.nextInt(99); //makes sure minimum is at least 1
    this.dir = rand.nextInt(1);
  }


  EFish(Random r) {
    this.rand = r;
    this.color = Color.blue;
    this.dir = rand.nextInt(1);
    this.radius = 1 + rand.nextInt(99);
    this.x = rand.nextInt(600);
    this.y = rand.nextInt(400);
  }

  //constructor for testing with randomness, takes in a random object 
  EFish(Random r, Color color, int dir, int radius) {
    this.rand = r;
    this.color = color;
    this.dir = dir;
    this.radius = radius;
    this.x = rand.nextInt(600);
    this.y = rand.nextInt(400);
  }

  // lets you define a specific x and y location for testing 
  EFish(Color color, int dir, int radius, int x, int y) {
    this.rand = new Random();
    this.color = color;
    this.dir = dir;
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  // draw this Efish as a circle
  public WorldImage draw() {
    return new CircleImage(this.radius, "solid", this.color);
  }

  /*
  TEMPLATE
  FIELDS:
  ... this.x ...               -- int
  ... this.y ...               -- int
  ... this.color               -- color
  ... this.radius ...          -- int
  ... this.rand ...            -- Random

  METHODS
  ... this.draw() ...          -- WorldImage
   */


}

// to represent a list of enemy fish
interface ILoFish {

  // draws a list of enemy fishes
  WorldScene draw(WorldScene acc);

}

// list of empty enemy fishes
class MtLoEFish implements ILoFish {
  MtLoEFish() {
  }

  //draws an empty list of fishes onto the board
  public WorldScene draw(WorldScene acc) {
    return acc;
  }

  /*
  TEMPLATE

  METHODS
  ... this.draw() ...          -- WorldScene
   */

}

// list of non-empty enemy fishes
class ConsLoEFish implements ILoFish {
  EFish first;
  ILoFish rest;

  ConsLoEFish(EFish first, ILoFish rest) {
    this.first = first;
    this.rest = rest;
  }

  //draws a non-empty list onto the scene
  public WorldScene draw(WorldScene acc) {
    return this.rest.draw(acc.placeImageXY(this.first.draw(), this.first.x, this.first.y));
  }

  /*
  TEMPLATE
  FIELDS:
  ... this.first ...           -- EFIsh
  ... this.rest ...            -- ILoFish

  METHODS
  ... this.draw() ...          -- WorldScene
   */

}

// class that extends the world
class FishWorld extends World {
  PFish pfish;
  ILoFish efishes;


  FishWorld(PFish pfish, ILoFish efishes) {
    this.pfish = pfish;
    this.efishes = efishes;
  }

  // draws the fish onto the background
  public WorldScene makeScene() {
    WorldScene canvas = new WorldScene(600, 400);
    WorldScene enemies = this.efishes.draw(canvas);
    WorldImage player = this.pfish.draw();
    return enemies.placeImageXY(player, this.pfish.x, this.pfish.y);
  }

  /*
  TEMPLATE
  FIELDS:
  ... this.PFish ...           -- PFish
  ... this.EFishes ...         -- EFishes

  METHODS
  ... this.makeScene() ...          -- WorldScene
   */

}

// class for testing examples of fish
class ExampleFish {
  // player fish examples
  PFish Player = new PFish(0, 0, Color.red, 2);
  PFish Player2 = new PFish(4, 4, Color.red, 20);

  // player fish that starts at the center of the board, radius 10
  PFish PlayerCenter = new PFish(300, 200, Color.red, 10);

  // enemy fish in same location as Player, bigger than pfish going right
  EFish Enemy1 = new EFish(Color.blue, 1, 4, 0, 0);
  // enemy fish in same location as Player, smaller than pfish going left
  EFish Enemy2 = new EFish(Color.blue, 0, 1, 0, 0);
  // enemy fish in different location than Player
  EFish Enemy3 = new EFish(Color.blue, 1, 8, 100, 10); 
  //non-empty list of enemy fish
  ILoFish mtlist = new MtLoEFish();
  ILoFish EnemyList1 = new ConsLoEFish(this.Enemy3, this.mtlist);
  ILoFish EnemyList2 = new ConsLoEFish(this.Enemy2, this.EnemyList1);
  ILoFish EnemyList3 = new ConsLoEFish(this.Enemy1, this.EnemyList2);

  //long list of our starting enemy fish
  EFish E1 = new EFish();
  EFish E2 = new EFish();
  EFish E3 = new EFish();
  EFish E4 = new EFish();
  EFish E5 = new EFish();
  EFish E6 = new EFish();

  //list of our fish together
  ILoFish EList1 = new ConsLoEFish(this.E6, this.mtlist);
  ILoFish EList2 = new ConsLoEFish(this.E5, this.EList1);
  ILoFish EList3 = new ConsLoEFish(this.E4, this.EList2);
  ILoFish EList4 = new ConsLoEFish(this.E3, this.EList3);
  ILoFish EList5 = new ConsLoEFish(this.E2, this.EList4);
  ILoFish EList6 = new ConsLoEFish(this.E1, this.EList5);

  //worldscene new
  WorldScene canvas = new WorldScene(600, 400);
  WorldScene scene1 = this.canvas.placeImageXY(this.Enemy3.draw(), this.Enemy3.x, this.Enemy3.y);
  WorldScene scene2 = this.scene1.placeImageXY(this.Enemy2.draw(), this.Enemy2.x, this.Enemy2.y);

  // testing the draw function for player fish, enemy fish, and lists of enemy fish
  boolean testDraw(Tester t) {
    return t.checkExpect(this.Player.draw(), new CircleImage(2, "solid", Color.red))
        //this test uses the constructor that has the default values
        && t.checkExpect(new PFish().draw(), new CircleImage(5, "solid", Color.red))
        && t.checkExpect(this.Player2.draw(), new CircleImage(20, "solid", Color.red))
        //tests for drawing enemy fish 
        && t.checkExpect(this.Enemy1.draw(), new CircleImage(4, "solid", Color.blue))
        && t.checkExpect(this.Enemy2.draw(), new CircleImage(1, "solid", Color.blue))
        && t.checkExpect(this.Enemy3.draw(), new CircleImage(8, "solid", Color.blue))
        //tests drawing the world scene on an empty list of Efish
        && t.checkExpect(this.mtlist.draw(this.canvas), this.canvas)
        // tests drawing a non-empty list of ELoFish
        // single enemy fish in scene
        && t.checkExpect(this.EnemyList1.draw(this.canvas), 
            this.canvas.placeImageXY(this.Enemy3.draw(), this.Enemy3.x, this.Enemy3.y))
        // two enemy fish in scene
        && t.checkExpect(this.EnemyList2.draw(this.canvas), 
            this.scene1.placeImageXY(this.Enemy2.draw(), this.Enemy2.x, this.Enemy2.y)) 
        // three enemy fish in scene 
        && t.checkExpect(this.EnemyList3.draw(this.canvas), 
            this.scene2.placeImageXY(this.Enemy1.draw(), this.Enemy1.x, this.Enemy1.y));
  }

  // testing for random constructor 
  EFish random1 = new EFish(new Random(3));
  EFish random2 = new EFish(new Random(3));// generates same values
  EFish random3 = new EFish(new Random(5));
  //generates same numbers as above
  EFish random4 = new EFish(new Random(5));


  // big bang
  boolean testBigBang(Tester t) {
    FishWorld world = new FishWorld(this.PlayerCenter, this.EList6);
    int worldWidth = 600;
    int worldHeight = 400;
    return world.bigBang(worldWidth, worldHeight); 
  }
}