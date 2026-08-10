# South Amboy Roads at Risk

Static GitHub Pages app for drawing road and cross-section profiles through the South Amboy municipal DEM.

The interface follows the North Wildwood Roads at Risk reference: threshold presets, NAVD88/MLLW conversion, terrain and hillshade views, saved multi-line cross sections, flood-history and future-frequency charts, and CSV/Shapefile exports.

Municipal constants:

- Observations: USGS 01396060, South Amboy
- PETSS / NOAA station: est0007
- NAVD88 thresholds: 4.14 ft minor, 5.14 ft moderate, 6.14 ft major
- MLLW thresholds: 7.2 ft minor, 8.2 ft moderate, 9.2 ft major
- MLLW = NAVD88 + 3.06 ft

Terrain source: USGS 3DEP Bare Earth DEM Dynamic ImageServer, clipped to the South Amboy boundary at 5-foot resolution.
