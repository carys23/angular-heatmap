import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private bounds: any;
  private image: any;

  private initMap(): void {
    this.map = L.map('map', { crs: L.CRS.Simple });
    this.bounds = [[0,0],[1000,1000]];
    this.image = L.imageOverlay('assets/floor.jpg', this.bounds).addTo(this.map);
    this.map.fitBounds(this.bounds);

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}