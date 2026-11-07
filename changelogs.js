// ===== SOLS CHANGELOGS =====
// To post a new update: copy the template below, paste it at the TOP of the list
// (right under "const CHANGELOGS = ["), fill it in, and save. Newest goes first.
//
//   {
//     version: 'v2.0.4',
//     date: '2026-11-10',            // year-month-day
//     title: 'Name of the update',
//     added:   ['New thing one', 'New thing two'],
//     changed: ['Something that works differently now'],
//     fixed:   ['A bug that got fixed'],
//     removed: ['Something that got taken out'],
//   },
//
// You can leave out any list you don't need (for example no "removed").
// Every line inside [ ] needs quotes around it and a comma between lines.
// If your text has an apostrophe like don't, use double quotes: "Players don't..."

const CHANGELOGS = [
  {
    version: 'v2.0.3',
    date: '2026-11-07',
    title: 'Movement & NPC update',
    added: [
      'Crouching: press Left Control to crouch and stand up',
      'Finger pointing: press B to point and stop pointing',
      'Both keys can be changed in Settings > Key Bindings > FiveM',
    ],
    changed: [
      'NPCs can no longer use guns, knives or other weapons. They can still fist fight.',
      'Lowered the amount of NPCs and traffic around the city',
      "GTA's crosshair is now hidden for all weapons",
    ],
    fixed: [
      'OTD weapon pack guns only doing 1 damage per bullet',
    ],
  },
  {
    version: 'v2.0.2',
    date: '2026-11-06',
    title: 'New weapon packs',
    added: [
      'Echo Windy City gun pack (24 pistols and switches)',
      'OTD weapon pack (11 guns including the 7 Inch ARP)',
      'Balenciaga weapon pack (29 guns)',
    ],
    changed: [
      'Switch and semi-auto pistols now use hollow point or 9mm ammo',
    ],
  },
  {
    version: 'v2.0.1',
    date: '2026-11-06',
    title: 'New websites',
    added: [
      'Faction Helper: weapon wheel and full weapon catalog',
      'Factions: Simple Guide To Serious Faction Roleplay',
      'LSPD & EMS guides: ranks, procedures, rules and radio codes',
      'Changelogs page (this one!)',
    ],
  },
];
