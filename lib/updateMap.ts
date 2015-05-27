/// <reference path="maps.ts"/>

export class UpdateMap {
  'use strict';

  private maps = require('./maps');

  constructor(public that) {}

  public updateMap(args) {
    var mapOptions = this.maps.mapOptions(args);
    return this.that.instance.setOptions(mapOptions);
  }

};
