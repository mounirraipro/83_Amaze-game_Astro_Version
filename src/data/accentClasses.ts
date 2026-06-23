export const brandAccentClass = "accent-blue";

export const getCategoryAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key === "beginner") return "accent-green";
  if (key === "intermediate") return "accent-blue";
  if (key === "advanced") return "accent-violet";
  if (key === "expert") return "accent-gold";
  if (key === "master") return "accent-coral";
  return brandAccentClass;
};
