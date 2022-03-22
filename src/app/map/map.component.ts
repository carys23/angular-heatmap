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
  private marker: any;
  private image: any;
  private LightIcon: any;
  private defaultHmRadius = 40;
  private defaultHmBlur = 25;
  private gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}

  private initMap(): void {
    this.map = L.map('map', { crs: L.CRS.Simple });
    this.bounds = [[0,0],[1000,1000]];
    this.image = L.imageOverlay('assets/floor.jpg', this.bounds).addTo(this.map);
    this.LightIcon = L.Icon.extend({
      options: {
      iconSize:[60, 55],
      }
  });
    this.LightIcon = new this.LightIcon ({iconUrl: 'assets/light.jpg'});
    this.map.fitBounds(this.bounds);
    // this.heat = L.heatLayer([], {radius: this.defaultHmRadius, blur: this.defaultHmBlur, gradient:this.gradient }).addTo(this.map);

this.marker = L.marker([800,800], {icon: this.LightIcon}).addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}