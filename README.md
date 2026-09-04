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

## Drawing and map controls

Draw, Clear, and Finish Line are in the top Map box. Aerial and Streets are the available basemaps; Aerial is the default. Low, Intermediate, and High scenario controls are below Observed History. Map zoom reaches 21; overzoom does not improve the source imagery or elevation resolution.

Snap to roads uses NJOGIS NG911 centerlines from `south_amboy_road_centerlines.geojson`. The roads are clipped to this application's existing municipal boundary for display, snapping, and routing. A missing boundary or road dataset disables road snapping; users can explicitly choose freehand mode. These profiles are not safe-driving directions or surveyed bridge-deck elevations.

The snapping checkbox stays available while drawing. Turning it off retains the draft control points and joins them directly. Turning it on snaps a connectable draft to roads; an incompatible draft stays freehand with an explanation. Completed profiles and the existing browser storage key are preserved. Saved and exported road profiles retain their traced geometry.

Road data source: NJ Office of GIS NG911 Road Centerlines, retrieved September 4, 2026 from https://services2.arcgis.com/XVOqAjTOJ5P6ngMu/arcgis/rest/services/Tran_road/FeatureServer/0 . Queries use the existing municipal boundary envelope in WGS84, preserve OBJECTID and source elevation-level fields, paginate in OBJECTID order, and validate the returned feature count. Runtime clipping prevents routes from leaving and re-entering the municipality.
