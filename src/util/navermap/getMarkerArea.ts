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
// const markerPoint8 = () => {
//   // 줌레벨 13~12
//   return [];
// };
// const markerPoint16 = () => {
//   // 줌레벨 11~10
//   return [];
// };

export const setMarkerArea = (zoomLevel: number, viewArea: AreaInterface) => {
  if (zoomLevel < 12) {
    return markerPoint4(viewArea);
  }
  if (zoomLevel < 14) {
    return markerPoint4(viewArea);
  }
  return markerPoint4(viewArea);
};
