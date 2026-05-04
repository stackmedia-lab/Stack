import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";
const builder = imageUrlBuilder(sanityClient);
type Src = Parameters<typeof builder.image>[0];
export const urlFor = (src: Src) => builder.image(src);
