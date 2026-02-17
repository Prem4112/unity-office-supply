import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css'],
  standalone: true
})
export class CategoryComponent {

  categoryType: string = '';

  products: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.categoryType = this.route.snapshot.params['type'];
    this.loadProducts();
  }

  loadProducts() {

    if (this.categoryType === 'housekeeping') {
      this.products = [
        {
          name: 'Taski R1',
          image: 'housekeeping/taski-r1.jpg'
        },
        {
          name: 'Taski R2',
          image: 'housekeeping/taski-r2.jpg'
        },
        {
          name: 'Room-freshener',
          image: 'housekeeping/room-freshener.jpg'
        },
        {
          name: 'WAll Klean',
          image: 'housekeeping/All Klean1.jpg'
        },
        {
          name: 'Carpet brite',
          image: 'housekeeping/carpet brite.jpg'
        },
        {
          name: 'Cleaning acid',
          image: 'housekeeping/cleaning acid.jpg'
        },
        {
          name: 'Dettol antispectic',
          image: 'housekeeping/dettol antispectic.jpg'
        },
        {
          name: 'Hand wash',
          image: 'housekeeping/hand wash.jpg'
        },
        {
          name: 'Cleaning acid',
          image: 'housekeeping/cleaning acid.jpg'
        },
        {
          name: 'Germ Free',
          image: 'housekeeping/germ free.jpg'
        },
        {
          name: 'Glass Cleaner',
          image: 'housekeeping/glass cleaner.jpg'
        },
        {
          name: 'Hand Soap',
          image: 'housekeeping/hand soap.jpg'
        },
        {
          name: 'Window Shine',
          image: 'housekeeping/window shine.jpg'
        },
        {
          name: 'Air Freshener',
          image: 'housekeeping/Air freshener.jpg'
        },
        {
          name: 'Electronic Room Freshner',
          image: 'housekeeping/electronic room freshner.jpg'
        },
        {
          name: 'Odonil Freshner',
          image: 'housekeeping/odonil freshner.jpg'
        },
        {
          name: 'Naphthalene bails',
          image: 'housekeeping/bails.jpg'
        },
        {
          name: 'All Tissues',
          image: 'housekeeping/tissue.jpg'
        },
        {
          name: 'Urinal cake',
          image: 'housekeeping/urinal cake.jpg'
        },
        {
          name: 'Multi-color Gloves',
          image: 'housekeeping/gloves.jpg'
        },
        {
          name: 'Hand Towel',
          image: 'housekeeping/hand towel.jpg'
        },
        {
          name: 'Mop Stick',
          image: 'housekeeping/mop stick.jpg'
        },
        {
          name: 'Mop',
          image: 'housekeeping/mop.jpg'
        },
        {
          name: 'Wiper',
          image: 'housekeeping/wiper.jpg'
        },
        {
          name: 'Dust Cob',
          image: 'housekeeping/dust cob.jpg'
        },
        {
          name: 'Dust Pan',
          image: 'housekeeping/dust pan.jpg'
        },
        {
          name: 'Hard Brush',
          image: 'housekeeping/hard brush.jpg'
        },
        {
          name: 'Hard broom',
          image: 'housekeeping/hard broom.jpg'
        },
        {
          name: 'Toilet brush',
          image: 'housekeeping/toilet brush.jpg'
        },
        {
          name: 'Areca Leaf Plates',
          image: 'housekeeping/Areca Leaf Plates.jpeg'
        },
        {
          name: 'Coffee Stirrer',
          image: 'housekeeping/Coffee Stirrer.jpeg'
        },
        {
          name: 'Cotton Roll',
          image: 'housekeeping/Cotton Roll.jpeg'
        },
        {
          name: 'Disposable Gloves',
          image: 'housekeeping/Disposable Gloves.jpeg'
        },
        {
          name: 'Juice Glass',
          image: 'housekeeping/Juice Glass.jpeg'
        },
        {
          name: 'Leaf Plates',
          image: 'housekeeping/Leaf Plates.jpeg'
        },
        {
          name: 'Non Woven Bouffant Cap',
          image: 'housekeeping/Non Woven Bouffant Cap.jpeg'
        },
        {
          name: 'Paper Cups',
          image: 'housekeeping/Paper Cups.jpeg'
        },
        {
          name: 'Paper Plates',
          image: 'housekeeping/Paper Plates.jpeg'
        },
        {
          name: 'Plastic Clear Glass',
          image: 'housekeeping/Plastic Clear Glass.jpeg'
        },
        {
          name: 'Plastic Food Container',
          image: 'housekeeping/Plastic Food Container.jpeg'
        },
        {
          name: 'Plastic Fork Spoon',
          image: 'housekeeping/Plastic Fork Spoon.jpeg'
        },
        {
          name: 'Plastic Spoons',
          image: 'housekeeping/Plastic Spoons.jpeg'
        },
        {
          name: 'Plastic Straws',
          image: 'housekeeping/Plastic Straws.jpeg'
        },
        {
          name: 'Silver foll paper',
          image: 'housekeeping/Silver foll paper.jpeg'
        },
        {
          name: 'Silver Food Container',
          image: 'housekeeping/Silver Food Container.jpeg'
        },
        {
          name: 'Thermocol Bowls',
          image: 'housekeeping/Thermocol Bowls.jpeg'
        },
        {
          name: 'Thermocol Cups',
          image: 'housekeeping/Thermocol Cups.jpeg'
        },
        {
          name: 'Thermocol Plates',
          image: 'housekeeping/Thermocol Plates.jpeg'
        },
        {
          name: 'Tooth Picks',
          image: 'housekeeping/Tooth Picks.jpeg'
        },
        {
          name: 'Coir Door Mat',
          image: 'housekeeping/Coir Door Mat.jpg'
        },{
          name: 'Plastic Door Mat',
          image: 'housekeeping/Plastic Door Mat.jpg'
        },{
          name: 'Rubber Door Mat',
          image: 'housekeeping/Rubber Door Mat.jpg'
        },{
          name: 'Soap Dispenser',
          image: 'housekeeping/Soap Dispenser.jpg'
        },{
          name: 'Dustbin',
          image: 'housekeeping/Dustbin.jpg'
        },{
          name: 'Dust GO Set',
          image: 'housekeeping/Dust GO Set.jpg'
        },{
          name: 'Brasso',
          image: 'housekeeping/Brasso.jpg'
        },{
          name: 'Toilet Plunger',
          image: 'housekeeping/Toilet Plunger.jpg'
        },{
          name: 'Umbrella Stand',
          image: 'housekeeping/Umbrella Stand.jpg'
        },{
          name: 'Garbage Bags',
          image: 'housekeeping/Garbage Bags.jpg'
        },

      ];
    }

    if (this.categoryType === 'pantry') {
      this.products = [
        { name: 'Tea', image: 'pantry/tea.jpg' },
        { name: 'Coffee', image: 'pantry/coffee.jpg' },
        { name: 'Milk', image: 'pantry/milk.jpg' },
        { name: 'Soft drinks', image: 'pantry/soft drinks.jpg' },
        { name: 'Bread & Butter', image: 'pantry/bread &  butter.jpg' },
        { name: 'Biscut', image: 'pantry/biscut.jpg' },
        { name: 'Water bottles', image: 'pantry/water bottle.jpg' },
        { name: 'Dry fruits', image: 'pantry/dry fruits.jpg' },

        { name: 'fruits', image: 'pantry/fruits.jpg' },
        { name: 'Sugar', image: 'pantry/sugar.jpg' },
        { name: 'vegitables', image: 'pantry/vegitables.jpg' }
      ];
    }

    if (this.categoryType === 'stationery') {
      this.products = [
        { name: 'Pen', image: 'stationery/pen.jpg' },
        { name: 'Papers', image: 'stationery/papers.jpg' },
        { name: 'Pencile', image: 'stationery/pencile.jpg' },
        { name: 'Box Files', image: 'stationery/Box Files.jpg' },
        { name: 'Envelopes', image: 'stationery/Envelopes.jpg' },
        { name: 'Ink Cartridge  Refilling', image: 'stationery/Ink Cartridge  Refilling.jpg' },
        { name: 'Marker Pens', image: 'stationery/Marker Pens.jpeg' },
        { name: 'New Ink Cartridge', image: 'stationery/New Ink Cartridge.jpg' },
        { name: 'New Toner Cartridge', image: 'stationery/New Toner Cartridge.jpg' },
        { name: 'Notice Board', image: 'stationery/Notice Board.jpg' },
        { name: 'Pencil and Eraser', image: 'stationery/Pencil and Eraser.jpeg' },
        { name: 'Punch folder', image: 'stationery/Punch folder.jpg' },
        { name: 'Punching Machine', image: 'stationery/Punching Machine.jpg' },
        { name: 'Ring Binder', image: 'stationery/Ring Binder.jpg' },
        { name: 'Steel Lock', image: 'stationery/Steel Lock.jpg' },
        { name: 'Tapes and Tape DIspenser', image: 'stationery/Tapes and Tape DIspenser.jpg' },
        { name: 'Toner Cartridge Refilling', image: 'stationery/Toner Cartridge Refilling.jpg' },
        { name: 'White Board', image: 'stationery/White Board.jpg' },

        { name: 'Sketch Pens', image: 'stationery/Sketch Pens.jpeg' },
        { name: 'Stapler and Pins', image: 'stationery/Stapler and Pins.jpg' },
        { name: 'Steel Lock', image: 'stationery/Steel Lock.jpg' },
        { name: 'All Combo', image: 'stationery/All Combo.jpg' },
        { name: 'Bottle', image: 'stationery/bottle.jpg' },
        { name: 'container', image: 'stationery/container.jpg' },
        { name: '', image: 'stationery/download (1).jpg' },
        { name: 'Bucket', image: 'stationery/download.jpg' },
        { name: 'Cleaning Tray', image: 'stationery/images.jpg' },
        { name: 'Water Jar', image: 'stationery/water.jpg' },
        { name: 'Tray', image: 'stationery/tray.jpg' },
        { name: 'Water glass', image: 'stationery/glass.jpg' },
        { name: 'office box', image: 'stationery/office box.jpg' },
      ];
    }

    if (this.categoryType === 'workspace') {
      this.products = [
        { name: 'Tv', image: 'workspace/tv.jpg' },
        { name: 'Home Theater', image: 'workspace/home theater.jpg' },
        { name: 'Refrigrator', image: 'workspace/refrigrator.jpg' },
        { name: 'Fan', image: 'workspace/fan.jpg' },
        { name: 'Coffe Maker', image: 'workspace/coffe maker.jpg' },
        { name: 'Vaccum Cleaner', image: 'workspace/cleaner.jpg' },
        { name: 'Catle', image: 'workspace/catle.jpg' },
        { name: 'Storage Box', image: 'workspace/office box.jpg' },
        { name: 'Emergency light', image: 'workspace/light.jpg' },
        { name: 'Tube light', image: 'workspace/tube light.jpg' },
        { name: 'Bulb', image: 'workspace/bulb.jpg' },
        { name: 'Buster', image: 'workspace/buster.jpg' },
        { name: 'Toaster', image: 'workspace/toaster.jpg' },
        { name: 'Tap', image: 'workspace/tap.jpg' },
        { name: 'Automatic Hand Dryer', image: 'workspace/Automatic Hand Dryer.jpeg' },
        { name: 'Aerosol Dispenser', image: 'workspace/Aerosol Dispenser.jpeg' },
        { name: 'Tissue Dispenser', image: 'workspace/Tissue Dispenser.jpeg' },
        { name: 'P. P. Bags', image: 'workspace/P. P. Bags.jpeg' },

      ];
    }
    if (this.categoryType === 'safety') {
      this.products = [
        {
          name: 'Safety Helmet',
          image: 'safety/Saftey Helmet.jpg'
        },
        {
          name: 'Safety Gum Boots',
          image: 'safety/Saftey Gum Boots.jpg'

        },
        {
          name: 'Safety Gloves',
          image: 'safety/Saftey Gloves.jpg'

        },
        {
          name: 'Safety Shoes',
          image: 'safety/Saftey Shoes.jpg'

        },
        {
          name: 'Life Reflective',
          image: 'safety/Life Reflective.jpg'

        },
        {
          name: 'Safety Life Jacket',
          image: 'safety/Saftey Life Jacket.jpg'

        },
        {
          name: 'Safety Rain Coat',
          image: 'safety/Saftey Rain Coat.jpg'

        },
        {
          name: 'Barrication Tape',
          image: 'safety/Barrication Tape.jpg'

        },
        {
          name: 'Flexible Posts',
          image: 'safety/Flexible Posts.jpg'

        },
        {
          name: 'Floor Sign Boards',
          image: 'safety/Floor Sign Boards.jpg'

        },
        {
          name: 'Ladder',
          image: 'safety/Ladder.jpg'

        },
        {
          name: 'Parking Cone',
          image: 'safety/Parking Cone.jpg'

        },
        {
          name: 'Saftey Belt',
          image: 'safety/Saftey Belt.jpg'

        },
        {
          name: 'Saftey Convex Mirror',
          image: 'safety/Saftey Convex Mirror.jpg'

        },
        {
          name: 'Saftey Ear Muff & Plug',
          image: 'safety/Saftey Ear Muff & Plug.jpg'

        },
        {
          name: 'Saftey Eye Wear',
          image: 'safety/Saftey Eye Wear.jpg'

        },
        {
          name: 'Saftey Nose Mask',
          image: 'safety/Saftey Nose Mask.jpg'

        },
        {
          name: 'Saftey Road Stud',
          image: 'safety/Saftey Road Stud.jpg'

        },
        {
          name: 'Saftey Sign',
          image: 'safety/Saftey Sign.png'

        },
        {
          name: 'Signaling Baton Light',
          image: 'safety/Signaling Baton Light.jpg'

        }



      ];
    }
    if (this.categoryType === 'packaging') {
      this.products = [
        {
          name: 'Brown Paper Bag',
          image: 'packaging/Brown Paper Bag.jpeg'
        },
        {
          name: 'Brown Tapes',
          image: 'packaging/Brown Tapes.jpeg'
        },
        {
          name: 'Bubble Roll',
          image: 'packaging/Bubble Roll.jpeg'
        },
        {
          name: 'Foam Roll',
          image: 'packaging/Foam Roll.jpeg'
        },
        {
          name: 'Gunny Bags',
          image: 'packaging/Gunny Bags.jpeg'
        },
        {
          name: 'Lock Bags',
          image: 'packaging/Lock Bags.jpeg'
        },
        {
          name: 'Packing Patti Roll',
          image: 'packaging/Packing Patti Roll.jpeg'
        },
        {
          name: 'Wrapping Roll',
          image: 'packaging/Wrapping Roll.jpeg'
        },
        {
          name: 'Corrugated Roll',
          image: 'packaging/Corrugated Roll.jpeg'
        },
        {
          name: 'Packing Patti Clips',
          image: 'packaging/Packing Patti Clips.jpg'
        },
        {
          name: 'Packing Patti Tools',
          image: 'packaging/Packing Patti Tools.jpeg'
        },
        {
          name: 'Thermocol sheet',
          image: 'packaging/Thermocol sheet.jpeg'
        },
        {
          name: 'Sutali Roll',
          image: 'packaging/Sutali Roll.jpeg'
        },
        {
          name: 'Packing Box',
          image: 'packaging/Packing Box.jpeg'
        },
        {
          name: 'Blue Carry Bags',
          image: 'packaging/Blue Carry Bags.jpeg'
        },
        {
          name: 'P. P. Gumming Bags',
          image: 'packaging/P. P. Gumming Bags.jpg'
        }


      ];
    }
    if (this.categoryType === 'plastic') {
  this.products = [
    {
      name: 'Acrylic Bowl & Plates',
      image: 'plastic/Acrylic Bowl & Plates.jpg'
    },
    {
      name: 'Acrylic Glass',
      image: 'plastic/Acrylic Glass.jpg'
    },
    {
      name: 'Acrylic Lunch plate',
      image: 'plastic/Acrylic Lunch plate.jpg'
    },
    {
      name: 'Acrylic Soup Bowl',
      image: 'plastic/Acrylic Soup Bowl.jpg'
    },
    {
      name: 'Acrylic Tray',
      image: 'plastic/Acrylic Tray.jpg'
    },
    {
      name: 'Plastic Bottle',
      image: 'plastic/Plastic Bottle.jpg'
    },
    {
      name: 'Plastic Bowls',
      image: 'plastic/Plastic Bowls.jpg'
    },
    {
      name: 'Plastic Container',
      image: 'plastic/Plastic Container.jpg'
    },
    {
      name: 'Plastic Glass',
      image: 'plastic/Plastic Glass.jpg'
    },
    {
      name: 'Plastic Lunch Plate',
      image: 'plastic/Plastic Lunch Plate.jpg'
    },
    {
      name: 'Plastic Round Plate',
      image: 'plastic/Plastic Round Plate.jpg'
    },
    {
      name: 'Plastic Tray',
      image: 'plastic/Plastic Tray.jpg'
    },
    {
      name: 'Tea Coaster',
      image: 'plastic/Tea Coaster.jpg'
    },
     {
      name: 'Water Dispenser',
      image: 'plastic/Water Dispenser.jpg'
    },
     {
      name: 'Steel Glass',
      image: 'plastic/Steel Glass.jpg'
    },
     {
      name: 'Steel Snack Plate',
      image: 'plastic/Steel Snack Plate.jpg'
    },
     {
      name: 'Steel Thali',
      image: 'plastic/Steel Thali.jpg'
    },

  ];
}
if (this.categoryType === 'glass') {
  this.products = [
    {
      name: 'Water Glass',
      image: 'Glass/Water Glass.jpg'
    },
    {
      name: 'Wine Glass',
      image: 'Glass/Wine Glass.jpg'
    },
    {
      name: 'Shot Glass',
      image: 'Glass/Shot Glass.jpg'
    },
    {
      name: 'Juice Glass',
      image: 'Glass/Juice Glass.jpg'
    },
    {
      name: 'Beer Glass',
      image: 'Glass/Beer Glass.jpg'
    },
    {
      name: 'Ceramic Bowls',
      image: 'Glass/Ceramic Bowls.jpg'
    },

    {
      name: 'Ceramic Dinner Set',
      image: 'Glass/Ceramic Dinner Set.jpg'
    },
    {
      name: 'Ceramic Mug',
      image: 'Glass/Ceramic Mug.jpg'
    },
    {
      name: 'Ceramic Plates',
      image: 'Glass/Ceramic Plates.jpg'
    },
    {
      name: 'Ceramic Soup Bowls',
      image: 'Glass/Ceramic Soup Bowls.jpg'
    },
    {
      name: 'Ceramic Tea Cup',
      image: 'Glass/Ceramic Tea Cup.jpg'
    },
    {
      name: 'Flower Pot',
      image: 'Glass/Flower Pot.jpg'
    },
    {
      name: 'Fruit Bowl',
      image: 'Glass/Fruit Bowl.jpg'
    },
    {
      name: 'Glass Bowl',
      image: 'Glass/Glass Bowl.jpg'
    },
    {
      name: 'Glass Container',
      image: 'Glass/Glass Container.jpg'
    },
    {
      name: 'Glass Plate',
      image: 'Glass/Glass Plate.jpg'
    },
    {
      name: 'Glass Tea Cup',
      image: 'Glass/Glass Tea Cup.jpg'
    },
    {
      name: 'Ice-cream Bowl',
      image: 'Glass/Ice-cream Bowl.jpg'
    },
    {
      name: 'Cambro Containers',
      image: 'Glass/Cambro Containers.jpg'
    },
    
  ];
}



  }
}
