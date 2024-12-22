export const tronquerChaine = (chaine, longueur) => {
  return chaine.length > longueur ? chaine.slice(0, longueur) + "..." : chaine;
};
