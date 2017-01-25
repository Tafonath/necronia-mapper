var params = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
  params[key] = value;
});

var siteUrl = "http://necronia.gamepedia.com/Mapper";

var bounds = [[0,0], [2048,2048]];

var floor0 = L.imageOverlay('css/images/Floor-00-map.png', bounds, {id:1}),
    floor1 = L.imageOverlay('css/images/Floor-01-map.png', bounds, {id:2}),
    floor2 = L.imageOverlay('css/images/Floor-02-map.png', bounds, {id:3}),
    floor3 = L.imageOverlay('css/images/Floor-03-map.png', bounds, {id:4}),
    floor4 = L.imageOverlay('css/images/Floor-04-map.png', bounds, {id:5}),
    floor5 = L.imageOverlay('css/images/Floor-05-map.png', bounds, {id:6}),
    floor6 = L.imageOverlay('css/images/Floor-06-map.png', bounds, {id:7}),
    floor7 = L.imageOverlay('css/images/Floor-07-map.png', bounds, {id:8}),
    floor8 = L.imageOverlay('css/images/Floor-08-map.png', bounds, {id:9}),
    floor9 = L.imageOverlay('css/images/Floor-09-map.png', bounds, {id:10}),
    floor10 = L.imageOverlay('css/images/Floor-10-map.png', bounds, {id:11}),
    floor11 = L.imageOverlay('css/images/Floor-11-map.png', bounds, {id:12}),
    floor12 = L.imageOverlay('css/images/Floor-12-map.png', bounds, {id:13}),
    floor13 = L.imageOverlay('css/images/Floor-13-map.png', bounds, {id:14}),
    floor14 = L.imageOverlay('css/images/Floor-14-map.png', bounds, {id:15}),
    floor15 = L.imageOverlay('css/images/Floor-15-map.png', bounds, {id:16});

var floors = L.layerGroup([floor0, floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10, floor11, floor12, floor13, floor14, floor15]);

var baseLayers = {
    "Floor +7": floor0,
    "Floor +6": floor1,
    "Floor +5": floor2,
    "Floor +4": floor3,
    "Floor +3": floor4,
    "Floor +2": floor5,
    "Floor +1": floor6,
    "Ground Floor": floor7,
    "Floor -1": floor8,
    "Floor -2": floor9,
    "Floor -3": floor10,
    "Floor -4": floor11,
    "Floor -5": floor12,
    "Floor -6": floor13,
    "Floor -7": floor14,
    "Floor -8": floor15
};

if(params.x && params.y && params.z && params.zoom)
{
  var map = L.map('map', {
      crs: L.CRS.Simple,
      center: [parseInt(params.y)+1, parseInt(params.x)],
      zoom: 0,
      minZoom: -1,
      maxZoom: 4,
      layers: floors.getLayer(parseInt(params.z)),
      fullscreenControl: true,
      fullscreenControlOptions: {
          position: 'topleft'
      }
  });
}
else
{
  var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 4,
      layers: floor7,
      fullscreenControl: true,
      fullscreenControlOptions: {
          position: 'topleft'
      }
  });
}

L.Control.ActiveLayers = L.Control.Layers.extend({

  getActiveBaseLayer: function () {
    return this._activeBaseLayer
  },

  getActiveOverlayLayers: function () {
    return this._activeOverlayLayers
  },

  onAdd: function (map) {
    var container = L.Control.Layers.prototype.onAdd.call(this, map)

    if (Array.isArray(this._layers)) {
      this._activeBaseLayer = this._findActiveBaseLayer()
      this._activeOverlayLayers = this._findActiveOverlayLayers()
    } else {    // 0.7.x
      this._activeBaseLayer = this._findActiveBaseLayerLegacy()
      this._activeOverlayLayers = this._findActiveOverlayLayersLegacy()
    }
    return container
  },

  _findActiveBaseLayer: function () {
    var layers = this._layers
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i]
      if (!layer.overlay && this._map.hasLayer(layer.layer)) {
        return layer
      }
    }
    throw new Error('Control doesn\'t have any active base layer!')
  },

  _findActiveOverlayLayers: function () {
    var result = {}
    var layers = this._layers
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i]
      if (layer.overlay && this._map.hasLayer(layer.layer)) {
        result[layer.layer._leaflet_id] = layer
      }
    }
    return result
  },

  /**
   * Legacy 0.7.x support methods
   */
  _findActiveBaseLayerLegacy: function () {
    var layers = this._layers
    for (var layerId in layers) {
      if (this._layers.hasOwnProperty(layerId)) {
        var layer = layers[layerId]
        if (!layer.overlay && this._map.hasLayer(layer.layer)) {
          return layer
        }
      }
    }
    throw new Error('Control doesn\'t have any active base layer!')
  },

  _findActiveOverlayLayersLegacy: function () {
    var result = {}
    var layers = this._layers
    for (var layerId in layers) {
      if (this._layers.hasOwnProperty(layerId)) {
        var layer = layers[layerId]
        if (layer.overlay && this._map.hasLayer(layer.layer)) {
          result[layerId] = layer
        }
      }
    }
    return result
  },

  _onLayerChange: function () {
    L.Control.Layers.prototype._onLayerChange.apply(this, arguments)
    this._recountLayers()
  },

  _onInputClick: function () {
    this._handlingClick = true

    this._recountLayers()
    L.Control.Layers.prototype._onInputClick.call(this)

    this._handlingClick = false
  },

  _recountLayers: function () {
    var i, input, obj,
      inputs = this._form.getElementsByTagName('input'),
      inputsLen = inputs.length;

    for (i = 0; i < inputsLen; i++) {
      input = inputs[i]
      if (Array.isArray(this._layers)) {
        obj = this._layers[i]
      } else {
        obj = this._layers[input.layerId]   // 0.7.x
      }

      if (input.checked && !this._map.hasLayer(obj.layer)) {
        if (obj.overlay) {
          this._activeOverlayLayers[input.layerId] = obj
        } else {
          this._activeBaseLayer = obj
        }
      } else if (!input.checked && this._map.hasLayer(obj.layer)) {
        if (obj.overlay) {
          delete this._activeOverlayLayers[input.layerId]
        }
      }
    }
  }

})

L.control.activeLayers = function (baseLayers, overlays, options) {
  return new L.Control.ActiveLayers(baseLayers, overlays, options)
}

L.Crosshairs = L.LayerGroup.extend({
        options: {
            style: {
                position: 'bottomleft',
                opacity: 1,
                fillOpacity: 0,
                weight: 2,
                color: "#333",
                clickable: !1,
                pointerEvents: "none"
            }
        },

        initialize: function(options) {
            L.LayerGroup.prototype.initialize.call(this); 
            L.Util.setOptions(this, options);
        },

        onAdd: function(map) {          
            this.crosshair = {
                rectangle: L.rectangle([
                    [0, 0],
                    [1, 1]
                ], this.options.style),
                longitude_line_north: L.polyline([], this.options.style),
                longitude_line_south: L.polyline([], this.options.style),
                latitude_line_east: L.polyline([], this.options.style),
                latitude_line_west: L.polyline([], this.options.style)
            };

            for (var layer in this.crosshair) {
                  this.addLayer(this.crosshair[layer])
            }

            this._map = map, this._moveCrosshairs({
                latlng: this._map.getCenter()
            });
            this._map.on("click", this._moveCrosshairs.bind(this));
            this._map.on("move", this._moveCrosshairs.bind(this));
            this._map.on("zoomend", this._moveCrosshairs.bind(this));
            this._map.on("mouseover", this._show.bind(this));
            this.eachLayer(map.addLayer, map);
        },

        onRemove: function (map) {
            this._map.off('click', this._moveCrosshairs);
            this._map.off('zoomend', this._moveCrosshairs);
            this.eachLayer(this.removeLayer, this);
            this._map.getContainer().style.cursor = this._oldCursor;
        },

        _show: function() {
            this.eachLayer(function(l) {
              this._map.addLayer(l)
            }, this)
          },

        _hide: function() {
            this.eachLayer(function(l) {
              this._map.removeLayer(l)
            }, this)
        },

        _moveCrosshairs: function(map,data) {
            if(!data){
                var e;
                if (map.latlng) {
                    var i = this._map.project(map.latlng, 0),
                        n = Math.floor(i.x),
                        o = Math.floor(i.y);
                    e = L.latLngBounds(this._map.unproject([n, o], 0), this._map.unproject([n + 1, o + 1], 0))
                } else e = this.crosshair.rectangle.getBounds();
                var s = e.getCenter();
                this.crosshair.rectangle.setBounds(e);
                var r = this._map.project(s);
            }

            $('.url').html(siteUrl + '?x=' + parseInt(s.lng, 10) + '&y=' + parseInt(s.lat, 10) + '&z=' + layerID + '&zoom=' + this._map.getZoom() + '');

            this.crosshair.longitude_line_north.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().min.y])]);
            this.crosshair.longitude_line_south.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().max.y])]);
            this.crosshair.latitude_line_east.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().min.x, r.y])]);
            this.crosshair.latitude_line_west.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().max.x, r.y])]);
        }
    })

L.crosshairs = function (options) {
  return new L.Crosshairs(options)
}

L.Control.CrosshairPostion = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: '   ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    lngFormatter: undefined,
    latFormatter: undefined,
    lngPrefix: "<b>X: </b>",
    latPrefix: "<b>Y: </b>"
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'CrosshairCoordinates');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('click', this._onClick, this);
    this._container.innerHTML=this.options.emptyString;
    return this._container;
  },

  onRemove: function (map) {
    map.on('click', this._onClick)
  },

  _onClick: function (e) {
    var value = this.options.lngFirst ? lat + this.options.separator + lng : this.options.lngPrefix + parseInt(crosshair_x, 10) + this.options.separator + this.options.latPrefix + parseInt(crosshair_y,10) + "<b> Z: </b>" + layerID;
    this._container.innerHTML = value;
  }

});

L.control.crosshairPosition = function (options) {
    return new L.Control.CrosshairPostion(options);
};

// MouseCoordinates
L.Control.MousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: '   ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    lngFormatter: undefined,
    latFormatter: undefined,
    lngPrefix: "<b>X: </b>",
    latPrefix: "<b>Y: </b>"
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'MouseCoordinates');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML=this.options.emptyString;
    return this._container;
  },

  onRemove: function (map) {
    map.off('mousemove', this._onMouseMove)
  },

  _onMouseMove: function (e) {
    var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits); // x
    var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits); // y
    var value = this.options.lngFirst ? lat + this.options.separator + lng : this.options.lngPrefix + parseInt(lng, 10) + this.options.separator + this.options.latPrefix + parseInt(lat,10) + "<b> Z: </b>" + layerID;
    this._container.innerHTML = value;
  }

});

L.Map.mergeOptions({
    positionControl: false
});

L.Map.addInitHook(function () {
    if (this.options.positionControl) {
        this.positionControl = new L.Control.MousePosition();
        this.addControl(this.positionControl);
    }
});

L.control.mousePosition = function (options) {
    return new L.Control.MousePosition(options);
};

function _hoverTile() {
  var map = this.map,
      e = this;
  map.on("mouseout", function(map) {
      e.hoverTile.setBounds([
          [0, 0],
          [0, 0]
      ])
  }), map.on("mousemove", function(i) {
      var n = map.project(i.latlng, 0),
          o = Math.floor(n.x),
          s = Math.floor(n.y),
          r = [map.unproject([o, s], 0), map.unproject([o + 1, s + 1], 0)];
      e.hoverTile ? e.hoverTile.setBounds(r) : e.hoverTile = L.rectangle(r, {
          color: "#009eff",
          weight: 1,
          clickable: !1,
          pointerEvents: "none"
      }).addTo(map)
  })
}

//Add things to map
var control = L.control.activeLayers(baseLayers)
control.addTo(map)
map.fitBounds(bounds);

var layerID = control.getActiveBaseLayer().layer.options.id;
map.on('baselayerchange', baseLayerChange);
function baseLayerChange(e){
   layerID = control.getActiveBaseLayer().layer.options.id;
}
_hoverTile();
L.crosshairs().addTo(map);
L.control.mousePosition().addTo(map);
//L.control.crosshairPosition().addTo(map);

if(params.x && params.y && params.z && params.zoom){
  map.setView([parseInt(params.y)+1, parseInt(params.x)], parseInt(params.zoom));
}