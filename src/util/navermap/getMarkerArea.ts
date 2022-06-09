import { AreaInterface } from '../../interfaces/marker';

const markerPoint4 = (viewArea: AreaInterface): AreaInterface[] => {
  // 줌 레벨 14
  return [
    {
      minLat: (viewArea.minLat + viewArea.maxLat) / 2,
      maxLat: viewArea.maxLat,
      minLon: viewArea.minLon,
      maxLon: (viewArea.minLon + viewArea.maxLon) / 2,
    }, // 2 사분면(좌상단)
    {
      minLat: (viewArea.minLat + viewArea.maxLat) / 2,
      maxLat: viewArea.maxLat,
      minLon: (viewArea.minLon + viewArea.maxLon) / 2,
      maxLon: viewArea.maxLon,
    }, // 1 사분면(우상단)
    {
      minLat: viewArea.minLat,
      maxLat: (viewArea.minLat + viewArea.maxLat) / 2,
      minLon: viewArea.minLon,
      maxLon: (viewArea.minLon + viewArea.maxLon) / 2,
    }, // 3 사분면(좌하단)
    {
      minLat: viewArea.minLat,
      maxLat: (viewArea.minLat + viewArea.maxLat) / 2,
      minLon: (viewArea.minLon + viewArea.maxLon) / 2,
      maxLon: viewArea.maxLon,
    }, // 4 사분면(우하단)
  ];
};
const markerPoint8 = (viewArea: AreaInterface): AreaInterface[] => {
  const area4Array = markerPoint4(viewArea);
  const [areaA, areaB, areaC, areaD] = area4Array.map(area => {
    return [
      {
        minLat: (area.minLat + area.maxLat) / 2,
        maxLat: area.maxLat,
        minLon: area.minLon,
        maxLon: area.maxLon,
      }, // 2 사분면(좌상단)
      {
        minLat: area.minLat,
        maxLat: (area.minLat + area.maxLat) / 2,
        minLon: area.minLon,
        maxLon: area.maxLon,
      }, // 2 사분면(좌상단)
    ];
  });
  // 줌레벨 13~12
  return [...areaA, ...areaB, ...areaC, ...areaD];
};
const markerPoint16 = (viewArea: AreaInterface): AreaInterface[] => {
  // 줌레벨 11~10
  const area4Array = markerPoint4(viewArea);
  const [areaA, areaB, areaC, areaD] = area4Array.map(area => {
    return markerPoint4(area);
  });
  return [...areaA, ...areaB, ...areaC, ...areaD];
};

export const setMarkerArea = (zoomLevel: number, viewArea: AreaInterface) => {
  if (zoomLevel < 11) {
    return markerPoint16(viewArea);
  }
  if (zoomLevel < 13) {
    return markerPoint8(viewArea);
  }
  return markerPoint4(viewArea);
};
