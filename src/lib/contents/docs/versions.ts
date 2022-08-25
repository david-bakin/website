export const versions: Version[] = [
  {
    name: "22.04",
    releaseDate: new Date("2022-04-22"),
  },
].sort((a, b) => {
  return b.releaseDate.getTime() - a.releaseDate.getTime();
});

export type Version = {
  name: string;
  releaseDate: Date;
};
