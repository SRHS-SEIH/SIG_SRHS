var hideLabel = function (label) {
  label.labelObject.style.opacity = 0;
  label.labelObject.style.transition = "opacity 0s";
  if (label && label.style) {
    label.style.opacity = 0;
    label.style.transition = "opacity 0s";
  }
};

var showLabel = function (label) {
  label.labelObject.style.opacity = 1;
  label.labelObject.style.transition = "opacity 1s";
  if (label && label.style) {
    label.style.opacity = 1;
    label.style.transition = "opacity 1s";
  }
};
labelEngine = new labelgun.default(hideLabel, showLabel);

var id = 0;
var labels = [];
var totalMarkers = 0;

// Create label engine
labelEngine = new labelgun.default(hideLabel, showLabel);

function resetLabels(markers) {
  labelEngine.reset();
  var i = 0;
  for (var j = 0; j < markers.length; j++) {
    markers[j].eachLayer(function (label) {
      addLabel(label, ++i);
    });
  }
  labelEngine.reset();
  var i = 0;
  for (var j = 0; j < markers.length; j++) {
    markers[j].eachLayer(function (layer) {
      addLabelToEngine(layer, ++i);
    });
  }
  labelEngine.update();
}

function addLabel(layer, id) {
  // This is ugly but there is no getContainer method on the tooltip :(
  if (layer.getTooltip()) {
    var label = layer.getTooltip()._source._tooltip._container;
    if (label) {
      // We need the bounding rectangle of the label itself
      var rect = label.getBoundingClientRect();

      // We convert the container coordinates (screen space) to Lat/lng
      var bottomLeft = map.containerPointToLatLng([rect.left, rect.bottom]);
      var topRight = map.containerPointToLatLng([rect.right, rect.top]);
      var boundingBox = {
        bottomLeft: [bottomLeft.lng, bottomLeft.lat],
        topRight: [topRight.lng, topRight.lat],
      };

      // Ingest the label into labelgun itself
      labelEngine.ingestLabel(
        boundingBox,
        id,
        parseInt(Math.random() * (5 - 1) + 1), // Weight
        label,
        "Test " + id,
        false
      );

      // If the label hasn't been added to the map already
      // add it and set the added flag to true
      if (!layer.added) {
        layer.addTo(map);
        layer.added = true;
      }
      function addLabelToEngine(layer, id) {
        const tooltip = layer.getTooltip && layer.getTooltip();
        if (!tooltip) return;

        let container = tooltip._container;

        // Try to open the tooltip if the container doesn't exist yet
        if (!container) {
          try {
            layer.openTooltip();
            container = tooltip._container;
          } catch (e) {
            console.warn(`Tooltip missing for layer ID ${id}. Skipping.`);
            return;
          }
        }

        if (!container) {
          console.warn(
            "Still no container for tooltip after openTooltip. Skipping."
          );
          return;
        }

        const rect = container.getBoundingClientRect();
        const bottomLeft = map.containerPointToLatLng([rect.left, rect.bottom]);
        const topRight = map.containerPointToLatLng([rect.right, rect.top]);

        const boundingBox = {
          bottomLeft: [bottomLeft.lng, bottomLeft.lat],
          topRight: [topRight.lng, topRight.lat],
        };

        labelEngine.ingestLabel(
          boundingBox,
          id,
          Math.floor(Math.random() * 4) + 1, // Random weight 1–4
          container,
          "Label " + id,
          false
        );
      }
    }
  }
}
