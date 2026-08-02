import { MemberComparison } from "../../types/member.js";
import { Player } from "../../types/player.js";
import { getClan } from "../coc/clan.js";
import { getPlayer } from "../coc/player.js";

export async function getMembersData(tag: string) {
  const clan = await getClan(tag);

  const players = await Promise.all(clan.memberList.map((member) => getPlayer(member.tag)));

  const members: MemberComparison[] = clan.memberList.map((member, index) => ({
    clanMember: member,
    player: players[index],
    heroProgress: calculateHeroProgress(players[index]),
    equipmentProgress: calculateEquipmentProgress(players[index]),
    troopProgress: calculateTroopProgress(players[index]),
    spellProgress: calculateSpellProgress(players[index]),
  }));

  return members;
}

function calculateHeroProgress(player: Player): number {
  const homeHeroes = player.heroes.filter((hero) => hero.village === "home");

  const currentLevels = homeHeroes.reduce((total, hero) => total + hero.level, 0);

  const maxLevels = homeHeroes.reduce((total, hero) => total + hero.maxLevel, 0);

  if (maxLevels === 0) {
    return 0;
  }

  return Math.round((currentLevels / maxLevels) * 100);
}

function calculateEquipmentProgress(player: Player): number {
  const homeEquipment = player.heroEquipment.filter((equipment) => equipment.village === "home");

  const currentLevels = homeEquipment.reduce((total, equipment) => total + equipment.level, 0);

  const maxLevels = homeEquipment.reduce((total, equipment) => total + equipment.maxLevel, 0);

  if (maxLevels === 0) {
    return 0;
  }

  return Math.round((currentLevels / maxLevels) * 100);
}

function calculateTroopProgress(player: Player): number {
  const homeTroops = player.troops.filter((troop) => troop.village === "home");

  const currentLevels = homeTroops.reduce((total, troop) => total + troop.level, 0);

  const maxLevels = homeTroops.reduce((total, troop) => total + troop.maxLevel, 0);

  if (maxLevels === 0) {
    return 0;
  }

  return Math.round((currentLevels / maxLevels) * 100);
}

function calculateSpellProgress(player: Player): number {
  const homeSpells = player.spells.filter((spell) => spell.village === "home");

  const currentLevels = homeSpells.reduce((total, spell) => total + spell.level, 0);

  const maxLevels = homeSpells.reduce((total, spell) => total + spell.maxLevel, 0);

  if (maxLevels === 0) {
    return 0;
  }

  return Math.round((currentLevels / maxLevels) * 100);
}
