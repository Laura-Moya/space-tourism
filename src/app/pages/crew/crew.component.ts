import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  standalone: false,
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
crewMembers = [
    {
      name: 'Douglas Hurley',
      position: 'Commander',
      image: 'assets/crew/image-douglas-hurley.png',
      description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
      He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    },
    {
      name: 'Mark Shuttleworth',
      position: 'Mission Specialist',
      image: 'assets/crew/image-mark-shuttleworth.png',
      description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. 
      He became the first South African to travel to space as a space tourist.`,
    },
    {
      name: 'Victor Glover',
      position: 'Pilot',
      image: 'assets/crew/image-victor-glover.png',
      description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
      Glover is a commander in the U.S. Navy where he pilots an F/A-18.`,
    },
    {
      name: 'Anousheh Ansari',
      position: 'Flight Engineer',
      image: 'assets/crew/image-anousheh-ansari.png',
      description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
      Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS.`,
    }
  ];

  selectedCrew = this.crewMembers[0];

  selectCrew(member: any) {
    this.selectedCrew = member;
  }
}
