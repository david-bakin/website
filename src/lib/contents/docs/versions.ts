export const versions: Version[] = [
  {
    name: "22.04",
    releaseDate: new Date("22.04.2022"),
  },
].sort((a, b) => {
  return b.releaseDate.getTime() - a.releaseDate.getTime();
});

export type Version = {
  name: string;
  releaseDate: Date;
};

// export const versions = ["22.04"];
