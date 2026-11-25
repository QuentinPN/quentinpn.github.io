import type { ParseKeys } from 'i18next';

export type CareerEntry = {
  id: string;
  kind: 'job' | 'school';
  current?: boolean;
  periodKey: ParseKeys;
  roleKey: ParseKeys;
  placeKey: ParseKeys;
  textKey?: ParseKeys;
};

/** Most recent first, by start date. Facts come from the CV only. */
export const careerEntries: CareerEntry[] = [
  {
    id: 'trustcomsRd',
    kind: 'job',
    current: true,
    periodKey: 'career.items.trustcomsRd.period',
    roleKey: 'career.items.trustcomsRd.role',
    placeKey: 'career.items.trustcomsRd.place',
    textKey: 'career.items.trustcomsRd.text',
  },
  {
    id: 'trustcomsAlt',
    kind: 'job',
    periodKey: 'career.items.trustcomsAlt.period',
    roleKey: 'career.items.trustcomsAlt.role',
    placeKey: 'career.items.trustcomsAlt.place',
    textKey: 'career.items.trustcomsAlt.text',
  },
  {
    id: 'mptronic',
    kind: 'job',
    periodKey: 'career.items.mptronic.period',
    roleKey: 'career.items.mptronic.role',
    placeKey: 'career.items.mptronic.place',
    textKey: 'career.items.mptronic.text',
  },
  {
    id: 'master',
    kind: 'school',
    periodKey: 'career.items.master.period',
    roleKey: 'career.items.master.role',
    placeKey: 'career.items.master.place',
  },
  {
    id: 'bwit',
    kind: 'job',
    periodKey: 'career.items.bwit.period',
    roleKey: 'career.items.bwit.role',
    placeKey: 'career.items.bwit.place',
  },
  {
    id: 'bts',
    kind: 'school',
    periodKey: 'career.items.bts.period',
    roleKey: 'career.items.bts.role',
    placeKey: 'career.items.bts.place',
  },
];
