var map = {}; // required to initialize it before doc.ready for mapper to work

$(document).ready(function () {

  /* Get params from url */
  var params = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    params[key] = value;
  });

  var siteUrl = "https://necronia.gamepedia.com/Mapper";

  var bounds = [[0, 0], [4096, 4096]];

  var floor0 = L.imageOverlay('css/images/nFloor-00-map.png', bounds, {id: 0}),
    floor1 = L.imageOverlay('css/images/nFloor-01-map.png', bounds, {id: 1}),
    floor2 = L.imageOverlay('css/images/nFloor-02-map.png', bounds, {id: 2}),
    floor3 = L.imageOverlay('css/images/nFloor-03-map.png', bounds, {id: 3}),
    floor4 = L.imageOverlay('css/images/nFloor-04-map.png', bounds, {id: 4}),
    floor5 = L.imageOverlay('css/images/nFloor-05-map.png', bounds, {id: 5}),
    floor6 = L.imageOverlay('css/images/nFloor-06-map.png', bounds, {id: 6}),
    floor7 = L.imageOverlay('css/images/nFloor-07-map.png', bounds, {id: 7}),
    floor8 = L.imageOverlay('css/images/nFloor-08-map.png', bounds, {id: 8}),
    floor9 = L.imageOverlay('css/images/nFloor-09-map.png', bounds, {id: 9}),
    floor10 = L.imageOverlay('css/images/nFloor-10-map.png', bounds, {id: 10}),
    floor11 = L.imageOverlay('css/images/nFloor-11-map.png', bounds, {id: 11}),
    floor12 = L.imageOverlay('css/images/nFloor-12-map.png', bounds, {id: 12}),
    floor13 = L.imageOverlay('css/images/nFloor-13-map.png', bounds, {id: 13}),
    floor14 = L.imageOverlay('css/images/nFloor-14-map.png', bounds, {id: 14}),
    floor15 = L.imageOverlay('css/images/nFloor-15-map.png', bounds, {id: 15});

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

  var IronOres = new L.LayerGroup(),
    MetalOres = new L.LayerGroup(),
    KalemyteOres = new L.LayerGroup(),
    BrassOres = new L.LayerGroup(),
    SteelOres = new L.LayerGroup(),
    SilverineOres = new L.LayerGroup(),
    TarniteOres = new L.LayerGroup(),
    OrichalcumOres = new L.LayerGroup(),
    QuimpOres = new L.LayerGroup(),
    RubiniteOres = new L.LayerGroup();

///////////////////////////////////////////////////////////////////
//                      Markers Bawfuria                         //
///////////////////////////////////////////////////////////////////

  L.marker([2584.5, 1131.5], {floor: 8}).addTo(IronOres);
  L.marker([2594.5, 1130.5], {floor: 8}).addTo(IronOres);
  L.marker([2598.5, 1136.5], {floor: 8}).addTo(IronOres);
  L.marker([2592.5, 1163.5], {floor: 8}).addTo(IronOres);
  L.marker([2608.5, 1172.5], {floor: 8}).addTo(IronOres);
  L.marker([2618.5, 1151.5], {floor: 8}).addTo(IronOres);
  L.marker([2618.5, 1139.5], {floor: 8}).addTo(IronOres);
  L.marker([2608.5, 1127.5], {floor: 8}).addTo(IronOres);
  L.marker([2601.5, 1110.5], {floor: 8}).addTo(IronOres);
  L.marker([2596.5, 1116.5], {floor: 8}).addTo(IronOres);
  L.marker([2598.5, 1102.5], {floor: 8}).addTo(IronOres);
  L.marker([2612.5, 1075.5], {floor: 8}).addTo(IronOres);
  L.marker([2581.5, 1099.5], {floor: 8}).addTo(IronOres);
  L.marker([2583.5, 1075.5], {floor: 8}).addTo(IronOres);
  L.marker([2575.5, 1103.5], {floor: 8}).addTo(IronOres);
  L.marker([2505.5, 1255.5], {floor: 8}).addTo(IronOres);
  L.marker([2507.5, 1232.5], {floor: 8}).addTo(IronOres);
  L.marker([2601.5, 1082.5], {floor: 8}).addTo(IronOres);
  L.marker([2572.5, 1117.5], {floor: 9}).addTo(IronOres);
  L.marker([2571.5, 1114.5], {floor: 9}).addTo(IronOres);
  L.marker([2566.5, 1117.5], {floor: 9}).addTo(IronOres);
  L.marker([2559.5, 1125.5], {floor: 9}).addTo(IronOres);
  L.marker([2559.5, 1116.5], {floor: 9}).addTo(IronOres);
  L.marker([2555.5, 1114.5], {floor: 9}).addTo(IronOres);
  L.marker([2562.5, 1113.5], {floor: 9}).addTo(IronOres);
  L.marker([2565.5, 1110.5], {floor: 9}).addTo(IronOres);
  L.marker([2570.5, 1106.5], {floor: 9}).addTo(IronOres);
  L.marker([2568.5, 1097.5], {floor: 9}).addTo(IronOres);
  L.marker([2572.5, 1099.5], {floor: 9}).addTo(IronOres);
  L.marker([2574.5, 1101.5], {floor: 9}).addTo(IronOres);
  L.marker([2582.5, 1105.5], {floor: 9}).addTo(IronOres);
  L.marker([2562.5, 1130.5], {floor: 9}).addTo(IronOres);
  L.marker([2565.5, 1136.5], {floor: 9}).addTo(IronOres);
  L.marker([2603.5, 1136.5], {floor: 9}).addTo(IronOres);
  L.marker([2659.5, 1088.5], {floor: 9}).addTo(IronOres);
  L.marker([2638.5, 1069.5], {floor: 9}).addTo(IronOres);
  L.marker([2583.5, 1112.5], {floor: 9}).addTo(IronOres);
  L.marker([2601.5, 1104.5], {floor: 9}).addTo(IronOres);
  L.marker([2645.5, 1085.5], {floor: 9}).addTo(IronOres);
  L.marker([2632.5, 1079.5], {floor: 10}).addTo(IronOres);
  L.marker([2658.5, 1100.5], {floor: 11}).addTo(IronOres);

  L.marker([2587.5, 1110.5], {floor: 7}).addTo(MetalOres);
  L.marker([2599.5, 1109.5], {floor: 7}).addTo(MetalOres);
  L.marker([2571.5, 1116.5], {floor: 7}).addTo(MetalOres);
  L.marker([2554.5, 1231.5], {floor: 7}).addTo(MetalOres);
  L.marker([2574.5, 1202.5], {floor: 7}).addTo(MetalOres);
  L.marker([2580.5, 1214.5], {floor: 7}).addTo(MetalOres);
  L.marker([2585.5, 1132.5], {floor: 8}).addTo(MetalOres);
  L.marker([2594.5, 1140.5], {floor: 8}).addTo(MetalOres);
  L.marker([2583.5, 1140.5], {floor: 8}).addTo(MetalOres);
  L.marker([2587.5, 1151.5], {floor: 8}).addTo(MetalOres);
  L.marker([2592.5, 1157.5], {floor: 8}).addTo(MetalOres);
  L.marker([2604.5, 1162.5], {floor: 8}).addTo(MetalOres);
  L.marker([2603.5, 1171.5], {floor: 8}).addTo(MetalOres);
  L.marker([2606.5, 1171.5], {floor: 8}).addTo(MetalOres);
  L.marker([2622.5, 1161.5], {floor: 8}).addTo(MetalOres);
  L.marker([2611.5, 1159.5], {floor: 8}).addTo(MetalOres);
  L.marker([2623.5, 1153.5], {floor: 8}).addTo(MetalOres);
  L.marker([2616.5, 1149.5], {floor: 8}).addTo(MetalOres);
  L.marker([2623.5, 1132.5], {floor: 8}).addTo(MetalOres);
  L.marker([2616.5, 1127.5], {floor: 8}).addTo(MetalOres);
  L.marker([2611.5, 1123.5], {floor: 8}).addTo(MetalOres);
  L.marker([2575.5, 1084.5], {floor: 8}).addTo(MetalOres);
  L.marker([2595.5, 1068.5], {floor: 8}).addTo(MetalOres);
  L.marker([2499.5, 1251.5], {floor: 8}).addTo(MetalOres);
  L.marker([2551.5, 1208.5], {floor: 8}).addTo(MetalOres);
  L.marker([2563.5, 1120.5], {floor: 9}).addTo(MetalOres);
  L.marker([2556.5, 1120.5], {floor: 9}).addTo(MetalOres);
  L.marker([2569.5, 1131.5], {floor: 9}).addTo(MetalOres);
  L.marker([2560.5, 1134.5], {floor: 9}).addTo(MetalOres);
  L.marker([2622.5, 1085.5], {floor: 9}).addTo(MetalOres);
  L.marker([2617.5, 1095.5], {floor: 9}).addTo(MetalOres);
  L.marker([2616.5, 1075.5], {floor: 9}).addTo(MetalOres);
  L.marker([2595.5, 1064.5], {floor: 9}).addTo(MetalOres);
  L.marker([2642.5, 1090.5], {floor: 10}).addTo(MetalOres);

  L.marker([2576.5, 1185.5], {floor: 6}).addTo(KalemyteOres);
  L.marker([2576.5, 1186.5], {floor: 6}).addTo(KalemyteOres);
  L.marker([2532.5, 1187.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2518.5, 1180.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2515.5, 1181.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2515.5, 1182.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2508.5, 1192.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2548.5, 1215.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2533.5, 1217.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2528.5, 1224.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2553.5, 1131.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2571.5, 1153.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2600.5, 1156.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2604.5, 1115.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2604.5, 1116.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2504.5, 1116.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2575.5, 1111.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2564.5, 1103.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2567.5, 1125.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2602.5, 1091.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2582.5, 1097.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2582.5, 1098.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2600.5, 1166.5], {floor: 9}).addTo(KalemyteOres);

  L.marker([2529.5, 1121.5], {floor: 7}).addTo(BrassOres);
  L.marker([2526.5, 1107.5], {floor: 7}).addTo(BrassOres);
  L.marker([2504.5, 1115.5], {floor: 7}).addTo(BrassOres);
  L.marker([2512.5, 1104.5], {floor: 7}).addTo(BrassOres);
  L.marker([2515.5, 1093.5], {floor: 7}).addTo(BrassOres);
  L.marker([2502.5, 1143.5], {floor: 7}).addTo(BrassOres);
  L.marker([2492.5, 1149.5], {floor: 7}).addTo(BrassOres);
  L.marker([2501.5, 1166.5], {floor: 7}).addTo(BrassOres);
  L.marker([2521.5, 1190.5], {floor: 7}).addTo(BrassOres);
  L.marker([2568.5, 1235.5], {floor: 7}).addTo(BrassOres);
  L.marker([2554.5, 1244.5], {floor: 7}).addTo(BrassOres);
  L.marker([2547.5, 1269.5], {floor: 7}).addTo(BrassOres);
  L.marker([2547.5, 1264.5], {floor: 7}).addTo(BrassOres);
  L.marker([2484.5, 1273.5], {floor: 8}).addTo(BrassOres);
  L.marker([2490.5, 1271.5], {floor: 8}).addTo(BrassOres);
  L.marker([2495.5, 1252.5], {floor: 8}).addTo(BrassOres);
  L.marker([2639.5, 1095.5], {floor: 9}).addTo(BrassOres);

  L.marker([2590.5, 1165.5], {floor: 8}).addTo(SteelOres);
  L.marker([2499.5, 1258.5], {floor: 8}).addTo(SteelOres);
  L.marker([2491.5, 1265.5], {floor: 8}).addTo(SteelOres);
  L.marker([2491.5, 1266.5], {floor: 8}).addTo(SteelOres);
  L.marker([2490.5, 1266.5], {floor: 8}).addTo(SteelOres);
  L.marker([2490.5, 1265.5], {floor: 8}).addTo(SteelOres);
  L.marker([2544.5, 1095.5], {floor: 8}).addTo(SteelOres);
  L.marker([2545.5, 1107.5], {floor: 8}).addTo(SteelOres);
  L.marker([2532.5, 1111.5], {floor: 8}).addTo(SteelOres);
  L.marker([2516.5, 1100.5], {floor: 8}).addTo(SteelOres);
  L.marker([2507.5, 1087.5], {floor: 8}).addTo(SteelOres);
  L.marker([2512.5, 1123.5], {floor: 8}).addTo(SteelOres);
  L.marker([2587.5, 1227.5], {floor: 8}).addTo(SteelOres);
  L.marker([2587.5, 1228.5], {floor: 8}).addTo(SteelOres);
  L.marker([2588.5, 1228.5], {floor: 8}).addTo(SteelOres);
  L.marker([2569.5, 1241.5], {floor: 8}).addTo(SteelOres);
  L.marker([2560.5, 1219.5], {floor: 8}).addTo(SteelOres);
  L.marker([2566.5, 1206.5], {floor: 8}).addTo(SteelOres);
  L.marker([2575.5, 1199.5], {floor: 8}).addTo(SteelOres);
  L.marker([2587.5, 1178.5], {floor: 9}).addTo(SteelOres);

  L.marker([2452.5, 1287.5], {floor: 5}).addTo(SilverineOres);
  L.marker([2452.5, 1288.5], {floor: 5}).addTo(SilverineOres);
  L.marker([2466.5, 1227.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2466.5, 1228.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2443.5, 1211.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2443.5, 1210.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2451.5, 1232.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2451.5, 1233.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2438.5, 1260.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2438.5, 1261.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2472.5, 1270.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2472.5, 1271.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2496.5, 1257.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2496.5, 1258.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2500.5, 1293.5], {floor: 6}).addTo(SilverineOres);
  L.marker([2500.5, 1294.5], {floor: 6}).addTo(SilverineOres);

  L.marker([2557.5, 1192.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2548.5, 1199.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2539.5, 1188.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2543.5, 1205.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2548.5, 1199.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2545.5, 1211.5], {floor: 7}).addTo(TarniteOres);
  L.marker([2512.5, 1120.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2507.5, 1117.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2583.5, 1225.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2580.5, 1229.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2576.5, 1233.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2569.5, 1224.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2573.5, 1207.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2587.5, 1210.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2593.5, 1199.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2585.5, 1219.5], {floor: 9}).addTo(TarniteOres);

  L.marker([2504.5, 1126.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2490.5, 1126.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2464.5, 1127.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2465.5, 1162.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2634.5, 1196.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2639.5, 1202.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2641.5, 1195.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2652.5, 1196.5], {floor: 8}).addTo(OrichalcumOres);
  L.marker([2645.5, 1204.5], {floor: 8}).addTo(OrichalcumOres);

  L.marker([2633.5, 1193.5], {floor: 8}).addTo(QuimpOres);
  L.marker([2634.5, 1193.5], {floor: 8}).addTo(QuimpOres);
  L.marker([2634.5, 1194.5], {floor: 8}).addTo(QuimpOres);

//////////////////////////////////////////////////////////////////////
//                      Markers Valore Mine                         //
//////////////////////////////////////////////////////////////////////

  L.marker([2076.5, 1572.5], {floor: 8}).addTo(IronOres);
  L.marker([2068.5, 1546.5], {floor: 8}).addTo(IronOres);
  L.marker([2069.5, 1551.5], {floor: 8}).addTo(IronOres);
  L.marker([2057.5, 1549.5], {floor: 8}).addTo(IronOres);
  L.marker([2060.5, 1544.5], {floor: 8}).addTo(IronOres);
  L.marker([2060.5, 1540.5], {floor: 8}).addTo(IronOres);
  L.marker([2046.5, 1557.5], {floor: 8}).addTo(IronOres);
  L.marker([2057.5, 1560.5], {floor: 8}).addTo(IronOres);
  L.marker([2049.5, 1565.5], {floor: 8}).addTo(IronOres);
  L.marker([2052.5, 1567.5], {floor: 8}).addTo(IronOres);
  L.marker([2060.5, 1552.5], {floor: 8}).addTo(IronOres);
  L.marker([2078.5, 1540.5], {floor: 8}).addTo(IronOres);
  L.marker([2084.5, 1543.5], {floor: 8}).addTo(IronOres);
  L.marker([2085.5, 1558.5], {floor: 8}).addTo(IronOres);
  L.marker([2074.5, 1536.5], {floor: 8}).addTo(IronOres);
  L.marker([2066.5, 1527.5], {floor: 8}).addTo(IronOres);
  L.marker([2060.5, 1517.5], {floor: 8}).addTo(IronOres);
  L.marker([2069.5, 1522.5], {floor: 8}).addTo(IronOres);
  L.marker([2062.5, 1511.5], {floor: 8}).addTo(IronOres);
  L.marker([2073.5, 1509.5], {floor: 8}).addTo(IronOres);
  L.marker([2072.5, 1508.5], {floor: 8}).addTo(IronOres);
  L.marker([2056.5, 1507.5], {floor: 8}).addTo(IronOres);
  L.marker([2051.5, 1511.5], {floor: 8}).addTo(IronOres);
  L.marker([2048.5, 1519.5], {floor: 8}).addTo(IronOres);
  L.marker([2044.5, 1511.5], {floor: 8}).addTo(IronOres);
  L.marker([2058.5, 1501.5], {floor: 8}).addTo(IronOres);
  L.marker([2055.5, 1503.5], {floor: 8}).addTo(IronOres);
  L.marker([2055.5, 1497.5], {floor: 8}).addTo(IronOres);
  L.marker([2047.5, 1497.5], {floor: 8}).addTo(IronOres);
  L.marker([2051.5, 1506.5], {floor: 8}).addTo(IronOres);
  L.marker([2065.5, 1494.5], {floor: 8}).addTo(IronOres);
  L.marker([2068.5, 1489.5], {floor: 8}).addTo(IronOres);
  L.marker([2073.5, 1485.5], {floor: 8}).addTo(IronOres);
  L.marker([2067.5, 1499.5], {floor: 8}).addTo(IronOres);
  L.marker([2054.5, 1487.5], {floor: 8}).addTo(IronOres);
  L.marker([2045.5, 1485.5], {floor: 8}).addTo(IronOres);
  L.marker([2043.5, 1492.5], {floor: 8}).addTo(IronOres);
  L.marker([2038.5, 1487.5], {floor: 8}).addTo(IronOres);
  L.marker([2040.5, 1496.5], {floor: 8}).addTo(IronOres);
  L.marker([2032.5, 1497.5], {floor: 8}).addTo(IronOres);
  L.marker([2059.5, 1532.5], {floor: 9}).addTo(IronOres);

  L.marker([2087.5, 1577.5], {floor: 8}).addTo(MetalOres);
  L.marker([2034.5, 1505.5], {floor: 8}).addTo(MetalOres);
  L.marker([2061.5, 1485.5], {floor: 8}).addTo(MetalOres);
  L.marker([2070.5, 1501.5], {floor: 8}).addTo(MetalOres);
  L.marker([2063.5, 1503.5], {floor: 8}).addTo(MetalOres);
  L.marker([2054.5, 1554.5], {floor: 8}).addTo(MetalOres);
  L.marker([2075.5, 1568.5], {floor: 9}).addTo(MetalOres);
  L.marker([2057.5, 1586.5], {floor: 9}).addTo(MetalOres);
  L.marker([2057.5, 1562.5], {floor: 9}).addTo(MetalOres);
  L.marker([2064.5, 1551.5], {floor: 9}).addTo(MetalOres);
  L.marker([2076.5, 1569.5], {floor: 10}).addTo(MetalOres);
  L.marker([2071.5, 1568.5], {floor: 10}).addTo(MetalOres);
  L.marker([2068.5, 1565.5], {floor: 10}).addTo(MetalOres);
  L.marker([2058.5, 1585.5], {floor: 10}).addTo(MetalOres);
  L.marker([2059.5, 1579.5], {floor: 10}).addTo(MetalOres);
  L.marker([2057.5, 1571.5], {floor: 10}).addTo(MetalOres);
  L.marker([2058.5, 1563.5], {floor: 10}).addTo(MetalOres);

  L.marker([2064.5, 1565.5], {floor: 9}).addTo(SteelOres);
  L.marker([2063.5, 1580.5], {floor: 9}).addTo(SteelOres);
  L.marker([2057.5, 1588.5], {floor: 9}).addTo(SteelOres);

  L.marker([2053.5, 1500.5], {floor: 8}).addTo(BrassOres);
  L.marker([2052.5, 1500.5], {floor: 8}).addTo(BrassOres);
  L.marker([2053.5, 1499.5], {floor: 8}).addTo(BrassOres);
  L.marker([2052.5, 1499.5], {floor: 8}).addTo(BrassOres);
  L.marker([2047.5, 1515.5], {floor: 8}).addTo(BrassOres);
  L.marker([2048.5, 1515.5], {floor: 8}).addTo(BrassOres);
  L.marker([2047.5, 1514.5], {floor: 8}).addTo(BrassOres);
  L.marker([2048.5, 1514.5], {floor: 8}).addTo(BrassOres);
  L.marker([2086.5, 1549.5], {floor: 8}).addTo(BrassOres);
  L.marker([2045.5, 1575.5], {floor: 8}).addTo(BrassOres);
  L.marker([2060.5, 1578.5], {floor: 8}).addTo(BrassOres);
  L.marker([2061.5, 1581.5], {floor: 9}).addTo(BrassOres);
  L.marker([2056.5, 1587.5], {floor: 9}).addTo(BrassOres);
  L.marker([2058.5, 1538.5], {floor: 9}).addTo(BrassOres);
  L.marker([2064.5, 1544.5], {floor: 9}).addTo(BrassOres);
  L.marker([2048.5, 1543.5], {floor: 9}).addTo(BrassOres);
  L.marker([2065.5, 1569.5], {floor: 10}).addTo(BrassOres);
  L.marker([2060.5, 1562.5], {floor: 10}).addTo(BrassOres);

  L.marker([2045.5, 1484.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2074.5, 1489.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2074.5, 1488.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2047.5, 1504.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2057.5, 1512.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2053.5, 1532.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2059.5, 1533.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2067.5, 1538.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2045.5, 1547.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2070.5, 1570.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2079.5, 1568.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2059.5, 1559.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2061.5, 1537.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2066.5, 1540.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2054.5, 1544.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2050.5, 1538.5], {floor: 9}).addTo(KalemyteOres);
  L.marker([2070.5, 1571.5], {floor: 10}).addTo(KalemyteOres);
  L.marker([2070.5, 1570.5], {floor: 10}).addTo(KalemyteOres);

  L.marker([2070.5, 1564.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2086.5, 1569.5], {floor: 8}).addTo(TarniteOres);
  L.marker([2078.5, 1573.5], {floor: 9}).addTo(TarniteOres);
  L.marker([2059.5, 1576.5], {floor: 9}).addTo(TarniteOres);
  L.marker([2055.5, 1562.5], {floor: 9}).addTo(TarniteOres);
  L.marker([2065.5, 1545.5], {floor: 9}).addTo(TarniteOres);
  L.marker([2056.5, 1548.5], {floor: 9}).addTo(TarniteOres);
  L.marker([2074.5, 1574.5], {floor: 10}).addTo(TarniteOres);

//////////////////////////////////////////////////////////////////////
//                      Markers Mt. Irrudar                         //
//////////////////////////////////////////////////////////////////////

  L.marker([2235.5, 1381.5], {floor: 7}).addTo(MetalOres);
  L.marker([2225.5, 1402.5], {floor: 7}).addTo(MetalOres);
  L.marker([2217.5, 1394.5], {floor: 7}).addTo(MetalOres);
  L.marker([2202.5, 1390.5], {floor: 7}).addTo(MetalOres);
  L.marker([2195.5, 1383.5], {floor: 7}).addTo(MetalOres);
  L.marker([2216.5, 1369.5], {floor: 7}).addTo(MetalOres);
  L.marker([2216.5, 1381.5], {floor: 7}).addTo(MetalOres);
  L.marker([2184.5, 1366.5], {floor: 7}).addTo(MetalOres);
  L.marker([2187.5, 1367.5], {floor: 7}).addTo(MetalOres);
  L.marker([2251.5, 1394.5], {floor: 7}).addTo(MetalOres);
  L.marker([2263.5, 1414.5], {floor: 7}).addTo(MetalOres);
  L.marker([2269.5, 1406.5], {floor: 7}).addTo(MetalOres);
  L.marker([2261.5, 1403.5], {floor: 7}).addTo(MetalOres);
  L.marker([2262.5, 1384.5], {floor: 7}).addTo(MetalOres);
  L.marker([2289.5, 1406.5], {floor: 7}).addTo(MetalOres);
  L.marker([2282.5, 1434.5], {floor: 7}).addTo(MetalOres);
  L.marker([2270.5, 1417.5], {floor: 7}).addTo(MetalOres);
  L.marker([2264.5, 1423.5], {floor: 7}).addTo(MetalOres);
  L.marker([2307.5, 1409.5], {floor: 8}).addTo(MetalOres);
  L.marker([2309.5, 1406.5], {floor: 8}).addTo(MetalOres);
  L.marker([2304.5, 1411.5], {floor: 8}).addTo(MetalOres);
  L.marker([2303.5, 1415.5], {floor: 8}).addTo(MetalOres);
  L.marker([2273.5, 1397.5], {floor: 8}).addTo(MetalOres);
  L.marker([2253.5, 1409.5], {floor: 8}).addTo(MetalOres);
  L.marker([2299.5, 1384.5], {floor: 8}).addTo(MetalOres);
  L.marker([2239.5, 1376.5], {floor: 8}).addTo(MetalOres);
  L.marker([2235.5, 1368.5], {floor: 8}).addTo(MetalOres);
  L.marker([2244.5, 1398.5], {floor: 8}).addTo(MetalOres);
  L.marker([2241.5, 1404.5], {floor: 8}).addTo(MetalOres);
  L.marker([2244.5, 1378.5], {floor: 9}).addTo(MetalOres);
  L.marker([2252.5, 1385.5], {floor: 9}).addTo(MetalOres);
  L.marker([2249.5, 1391.5], {floor: 9}).addTo(MetalOres);

  L.marker([2234.5, 1371.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2234.5, 1390.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2218.5, 1393.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2219.5, 1375.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2219.5, 1374.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2196.5, 1370.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2196.5, 1376.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2208.5, 1387.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2279.5, 1408.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2262.5, 1404.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2297.5, 1413.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2286.5, 1416.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2274.5, 1425.5], {floor: 7}).addTo(KalemyteOres);
  L.marker([2307.5, 1413.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2306.5, 1407.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2266.5, 1390.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2253.5, 1365.5], {floor: 8}).addTo(KalemyteOres);
  L.marker([2249.5, 1388.5], {floor: 8}).addTo(KalemyteOres);

  L.marker([2252.5, 1383.5], {floor: 7}).addTo(BrassOres);
  L.marker([2252.5, 1382.5], {floor: 7}).addTo(BrassOres);
  L.marker([2253.5, 1383.5], {floor: 7}).addTo(BrassOres);
  L.marker([2253.5, 1382.5], {floor: 7}).addTo(BrassOres);
  L.marker([2265.5, 1413.5], {floor: 7}).addTo(BrassOres);
  L.marker([2265.5, 1412.5], {floor: 7}).addTo(BrassOres);
  L.marker([2266.5, 1413.5], {floor: 7}).addTo(BrassOres);
  L.marker([2266.5, 1412.5], {floor: 7}).addTo(BrassOres);
  L.marker([2290.5, 1396.5], {floor: 7}).addTo(BrassOres);
  L.marker([2291.5, 1397.5], {floor: 7}).addTo(BrassOres);
  L.marker([2291.5, 1396.5], {floor: 7}).addTo(BrassOres);
  L.marker([2280.5, 1419.5], {floor: 7}).addTo(BrassOres);
  L.marker([2281.5, 1420.5], {floor: 7}).addTo(BrassOres);
  L.marker([2187.5, 1398.5], {floor: 6}).addTo(BrassOres);
  L.marker([2188.5, 1399.5], {floor: 6}).addTo(BrassOres);
  L.marker([2272.5, 1417.5], {floor: 6}).addTo(BrassOres);
  L.marker([2273.5, 1417.5], {floor: 6}).addTo(BrassOres);
  L.marker([2272.5, 1416.5], {floor: 6}).addTo(BrassOres);
  L.marker([2273.5, 1416.5], {floor: 6}).addTo(BrassOres);
  L.marker([2300.5, 1414.5], {floor: 8}).addTo(BrassOres);
  L.marker([2299.5, 1414.5], {floor: 8}).addTo(BrassOres);
  L.marker([2300.5, 1413.5], {floor: 8}).addTo(BrassOres);
  L.marker([2299.5, 1413.5], {floor: 8}).addTo(BrassOres);

  L.marker([2283.5, 1397.5], {floor: 7}).addTo(SteelOres);
  L.marker([2259.5, 1416.5], {floor: 8}).addTo(SteelOres);
  L.marker([2259.5, 1417.5], {floor: 8}).addTo(SteelOres);
  L.marker([2260.5, 1417.5], {floor: 8}).addTo(SteelOres);
  L.marker([2261.5, 1419.5], {floor: 8}).addTo(SteelOres);
  L.marker([2240.5, 1380.5], {floor: 8}).addTo(SteelOres);
  L.marker([2240.5, 1379.5], {floor: 8}).addTo(SteelOres);
  L.marker([2241.5, 1379.5], {floor: 8}).addTo(SteelOres);

  L.marker([2268.5, 1405.5], {floor: 7}).addTo(RubiniteOres);
  L.marker([2268.5, 1404.5], {floor: 7}).addTo(RubiniteOres);
  L.marker([2263.5, 1399.5], {floor: 7}).addTo(RubiniteOres);
  L.marker([2263.5, 1398.5], {floor: 7}).addTo(RubiniteOres);
  L.marker([2282.5, 1404.5], {floor: 6}).addTo(RubiniteOres);

  var nodes = [IronOres, MetalOres, KalemyteOres, BrassOres, SteelOres, SilverineOres, TarniteOres, OrichalcumOres, QuimpOres, RubiniteOres];
  var nodesIcons = ["IronOre-marker.png", "MetalOre-marker.png", "KalemyteOre-marker.png", "BrassOre-marker.png", "SteelOre-marker.png", "SilverineOre-marker.png", "TarniteOre-marker.png", "OrichalcumOre-marker.png", "QuimpOre-marker.png", "RubiniteOre-marker.png"];

  var overlayLayers = {
    "Iron Ores": IronOres,
    "Metal Ores": MetalOres,
    "Kalemyte Ores": KalemyteOres,
    "Brass Ores": BrassOres,
    "Steel Ores": SteelOres,
    "Silverine Ores": SilverineOres,
    "Tarnite Ores": TarniteOres,
    "Orichalcum Ores": OrichalcumOres,
    "Quimp Ores": QuimpOres,
    "Rubinite Ores": RubiniteOres
  };

  if (params.x && params.y && params.z && params.zoom) {
    map = L.map('map', {
      crs: L.CRS.Simple,
      center: [parseInt(params.y) + 1, parseInt(params.x)],
      zoom: 0,
      minZoom: -1,
      maxZoom: 4,
      //parseInt(params.z)+1 is a 'hack' for leaflet ids starting at 1 and our floor ids starting at 0
      layers: floors.getLayer(parseInt(params.z) + 1),
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topleft',
        content: '<i class="fa fa-arrows-alt mapper-fullscreen-fa" aria-hidden="true"></i>'
      }
    });
  }
  else {
    map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 4,
      layers: floor7,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topleft',
        content: '<i class="fa fa-arrows-alt mapper-fullscreen-fa" aria-hidden="true"></i>'
      }
    });
  }

  /* Extend control to be able to getActiveBaseLayer */

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

  /* Crosshair */

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

    initialize: function (options) {
      L.LayerGroup.prototype.initialize.call(this);
      L.Util.setOptions(this, options);
    },

    onAdd: function (map) {
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

      for (var chunk in this.crosshair) {
        this.addLayer(this.crosshair[chunk])
      }

      this._map = map;
      this._moveCrosshairs({
        latlng: this._map.getCenter()
      });
      this._map.on("click", this._moveCrosshairs.bind(this));
      this._map.on("move", this._moveCrosshairs.bind(this));
      this._map.on("zoomend", this._moveCrosshairs.bind(this));
      this._map.on("mouseover", this._show.bind(this));
      this.eachLayer(map.addLayer, map);
    },

    onRemove: function () {
      this._map.off('click', this._moveCrosshairs);
      this._map.off('zoomend', this._moveCrosshairs);
      this.eachLayer(this.removeLayer, this);
      this._map.getContainer().style.cursor = this._oldCursor;
    },

    _show: function () {
      this.eachLayer(function (l) {
        this._map.addLayer(l)
      }, this)
    },

    _hide: function () {
      this.eachLayer(function (l) {
        this._map.removeLayer(l)
      }, this)
    },

    _moveCrosshairs: function (map, data) {
      if (!data) {
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

      $('.wiki_url').html('[' + siteUrl + '?x=' + parseInt(s.lng, 10) + '&y=' + parseInt(s.lat, 10) + '&z=' + layerID + '&zoom=' + this._map.getZoom() + ' here]');
      $('.direct_url').html(siteUrl + '?x=' + parseInt(s.lng, 10) + '&y=' + parseInt(s.lat, 10) + '&z=' + layerID + '&zoom=' + this._map.getZoom() + '');
      $('.node_url').html('L.marker([' + parseInt(s.lat, 10) + '.5, ' + parseInt(s.lng, 10) + '.5], {floor:' + layerID + '}).addTo(<span id="ore-helper">IronOres</span>)');

      this.crosshair.longitude_line_north.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().min.y])]);
      this.crosshair.longitude_line_south.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([r.x, this._map.getPixelBounds().max.y])]);
      this.crosshair.latitude_line_east.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().min.x, r.y])]);
      this.crosshair.latitude_line_west.setLatLngs([this._map.unproject([r.x, r.y]), this._map.unproject([this._map.getPixelBounds().max.x, r.y])]);
    }
  })

  L.crosshairs = function (options) {
    return new L.Crosshairs(options)
  }

  /* Mouse Coordinates */

  L.Control.MousePosition = L.Control.extend({
    options: {
      position: 'bottomleft',
      separator: '   ',
      emptyString: 'Unavailable',
      lngFirst: false,
      numDigits: 5,
      lngFormatter: undefined,
      latFormatter: undefined,
      initialLng: undefined,
      initialLat: undefined,
      lngPrefix: "<b>X: </b>",
      latPrefix: "<b>Y: </b>"
    },

    onAdd: function (map) {
      this._container = L.DomUtil.create('div', 'MouseCoordinates');
      L.DomEvent.disableClickPropagation(this._container);
      map.on('mousemove', this._onMouseMove, this);
      this._container.innerHTML = this.options.initialLng && this.options.initialLat ? this.options.lngPrefix + parseInt(this.options.initialLng, 10) + this.options.separator + this.options.latPrefix + parseInt(this.options.initialLat, 10) + "<b> Z: </b>" + layerID : this.options.emptyString;
      return this._container;
    },

    onRemove: function (map) {
      map.off('mousemove', this._onMouseMove)
    },

    _onMouseMove: function (e) {
      var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits); // x
      var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits); // y
      this._container.innerHTML = this.options.lngFirst ? lat + this.options.separator + lng : this.options.lngPrefix + parseInt(lng, 10) + this.options.separator + this.options.latPrefix + parseInt(lat, 10) + "<b> Z: </b>" + layerID;
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

  /* Highlight hovered tile/pixel */

  function _hoverTile(map) {
    map.on("mouseout", function () {
      this.hoverTile.setBounds([
        [0, 0],
        [0, 0]
      ])
    });
    map.on("mousemove", function (e) {
      var n = map.project(e.latlng, 0),
        o = Math.floor(n.x),
        s = Math.floor(n.y),
        r = [map.unproject([o, s], 0), map.unproject([o + 1, s + 1], 0)];
      this.hoverTile ? this.hoverTile.setBounds(r) : this.hoverTile = L.rectangle(r, {
        color: "#009eff",
        weight: 1,
        clickable: !1,
        pointerEvents: "none"
      }).addTo(map);
    })
  }

  /*Ore helper*/

  $('.node_url').on('click', '#ore-helper', function () {
    var x = ['IronOres', 'MetalOres', 'KalemyteOres', 'BrassOres', 'SteelOres', 'SilverineOres', 'TarniteOres', 'OrichalcumOres', 'QuimpOres', 'RubiniteOres'];
    for (var i = 0; x.length > i; i++) {
      if ($(this).text() == x[i]) {
        if (typeof x[i + 1] == 'undefined') {
          $(this).html(x[0]);
        }
        $(this).html(x[i + 1]);
        break;
      }
    }
  });

  /* Add things to map */

  var layers = L.control.activeLayers(baseLayers, overlayLayers);
  layers.addTo(map);
  map.fitBounds(bounds);

  var layerID = layers.getActiveBaseLayer().layer.options.id;

  map.on('baselayerchange', baseLayerChange);
  function baseLayerChange() {
    layerID = layers.getActiveBaseLayer().layer.options.id;

    for (var i = 0; i <= nodes.length - 1; i++) {
      nodes[i].remove();
      nodes[i].eachLayer(function (layer) {
        if (layer.options.floor != layerID) {
          layer.remove()
        }
      });
    }
  }

  map.on('overlayadd', overlayAdd);
  function overlayAdd(e) {
    e.layer.eachLayer(function (layer) {
      if (layer.options.floor != layerID) {
        layer.remove()
      }
      else if (layer._icon !== 'undefined' || layer._icon !== null) {
        for (var i = 0; i <= nodes.length - 1; i++) {
          if (e.layer == nodes[i]) {
            layer._icon.src = "css/images/markers/" + nodesIcons[i];
          }
        }
      }
    });
  }

  _hoverTile(map);
  if (params.x && params.y && params.z && params.zoom) {
    L.control.mousePosition({initialLng: params.x, initialLat: params.y}).addTo(map);
  } else {
    L.control.mousePosition().addTo(map);
  }

  /* Centers screen on given parameters from url */

  if (params.x && params.y && params.z && params.zoom) {
    map.setView([parseInt(params.y) + 1, parseInt(params.x)], parseInt(params.zoom));
  }
  L.crosshairs().addTo(map);
});