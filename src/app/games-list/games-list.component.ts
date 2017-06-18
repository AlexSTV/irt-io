import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games:  Game[] = [
    {
      name: 'Wordlink',
      subtitle: 'Web based puzzle game',
      description: `Wordlink is a web app game about finding words with a common theme.
      I built this web app to showcase my experience with web technologies.
      The web app is built with EmberJS using Material design guidelines and Sass for CSS preprocessing.
      The Server uses C# (supporting Mono and .Net) with Nancy webserver with an Sqlite database.`,
      image: 'word-link.png',
      chips: ['C#', 'JavaScript', 'EmberJS', 'Sass', 'Nancy', 'Ajax'],
      link: 'https://wordlink.irt.io/',
      linkTitle: 'Play it online',
      link2: '', link2Title: ''
    },
    {
      name: 'Silent Herdsman',
      subtitle: 'Automatic heat and health detection for cows',
      description: `I worked for Silent Herdsman for 3 years on a small 5 man team.
      Silent Herdsman (Now Afimilk since being aquired) develops a collar for cows which gathers data
      and processes it to detect when the cow is eating and ruminating for health issues and when the
      cow is in heat to detect the best time for artificial insemination.
      With it being a small team I contributed to every aspect of the software stack from the PC
      installed on the farm to the cloud server and web UI.
      My main responsibility was the c# tools and services running on the locally installed PC which
      process data from the collar into values of rumination, eating and whether the cow is in heat.`,
      image: 'cows.jpg',
      chips: ['C#', 'Postgresql', 'JavaScript', 'Ruby', 'Ember', 'Sinatra', 'Algorithms', ],
      link: 'http://www.afimilk.com/',
      linkTitle: 'Visit',
      link2: '', link2Title: ''
    },
    {
      name: 'Slope Simulator',
      subtitle: 'Simple android game',
      description: `Slope simulator is a simple proof of concept where the player
      draws the ski slope as a character and gets points by getting the character to do flips.`,
      image: 'slope-sim.png',
      chips: ['C#', 'Unity', 'Android'],
      link: 'https://play.google.com/store/apps/details?id=com.alexstv.skislope&hl=en',
      linkTitle: 'Google Play',
      link2: '', link2Title: ''
    },
    {
      name: 'Voxelmetric',
      subtitle: 'C# framework for creating voxel games',
      description: `This started out in August of 2013 as a tutorial series on how to render voxels in Unity which gained a huge following.
      Then I followed it up in December of 2014 with a second more advanced tutorial.
      Finally, I open sourced my voxel framework on Github in April of 2015.
      As my first open source project it has a lot of problems with readability and efficiency but I
      think it helped a lot of people and taught me a lot.`,
      image: 'voxelmetric.png',
      chips: [ 'C#', 'Open Source'],
      link: 'https://github.com/Voxelmetric/Voxelmetric1',
      linkTitle: 'View on Github',
      link2: `http://alexstv.com/index.php/posts/unity-voxel-block-tutorial`,
      link2Title: `Tutorial`
    },
    {
      name: 'Grapple',
      subtitle: 'Android physics game',
      description: 'A physics mobile game build in Unity (C#) where the player swings a hamster around hundreds of levels.',
      image: 'grapple.gif',
      chips: ['C#', 'Unity', 'Android'],
      link: 'http://grapple.nfshost.com/',
      linkTitle: 'Landing page',
      link2: '', link2Title: ''
    },
    {
      name: 'Mechanism',
      subtitle: 'Short android/PC arcade style game',
      description: `Mechanism is a weird little game played with a gamepad
      or on a phone where you can roll a ball whenever it's touching white surfaces`,
      image: 'mechanism.png',
      chips: ['C#', 'Unity', 'Android'],
      link: 'https://alexstv.itch.io/mechanism',
      linkTitle: 'Itch.io page',
      link2: '', link2Title: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
