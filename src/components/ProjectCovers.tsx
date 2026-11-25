import { PawPrint } from 'lucide-react';
import listShot from '../assets/projects/admissions-hub-liste.webp';

export function AdmissionsHubCover({ alt }: { alt: string }) {
  return (
    <div className="cover cover--hub">
      <div className="cover__window">
        <span className="cover__bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <img src={listShot} alt={alt} width={1440} height={720} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

/** Drawn cover for Pokefeet: a footprint to identify and the guesses so far. */
export function PokefeetCover() {
  return (
    <div className="cover cover--feet" aria-hidden="true">
      <div className="feet">
        <div className="feet__print">
          <PawPrint size={76} strokeWidth={1.5} />
        </div>
        <div className="feet__guesses">
          <span className="feet__guess feet__guess--miss" />
          <span className="feet__guess feet__guess--miss" />
          <span className="feet__guess feet__guess--hit" />
          <span className="feet__guess" />
        </div>
      </div>
    </div>
  );
}
