// Decode one band of terrain in bounded strips, preserving every source pixel.
// Large municipalities otherwise hold both a full decoded tile set and raster.
export async function readTerrainInStrips(image,width,height,onProgress=()=>{}){
  if(!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1)throw new Error('Invalid terrain dimensions');
  const stripHeight=Math.min(512,height);let raster;
  for(let top=0;top<height;top+=stripHeight){
    const bottom=Math.min(top+stripHeight,height);
    const strip=await image.readRasters({samples:[0],window:[0,top,width,bottom],interleave:true});
    if(strip.length!==width*(bottom-top))throw new Error('Incomplete terrain strip');
    if(!raster)raster=new strip.constructor(width*height);
    raster.set(strip,top*width);onProgress(bottom/height);
  }
  return raster;
}
