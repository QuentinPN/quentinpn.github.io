import hubShot from '../assets/projects/admissions-hub-liste.webp';
import viewerShot from '../assets/projects/viewer.webp';

type CoverProps = { src: string; width: number; height: number; alt: string };

/** A screenshot in a window frame, cropped by the cover's edges. */
function ScreenshotCover({ src, width, height, alt }: CoverProps) {
  return (
    <div className="cover cover--shot">
      <div className="cover__window">
        <span className="cover__bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export function AdmissionsHubCover({ alt }: { alt: string }) {
  return <ScreenshotCover src={hubShot} width={1440} height={720} alt={alt} />;
}

export function ViewerCover({ alt }: { alt: string }) {
  return <ScreenshotCover src={viewerShot} width={1600} height={876} alt={alt} />;
}
