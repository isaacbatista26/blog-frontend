export const getUserById = async (id: string) => {
  try {
    const response = await fetch(`http://3.141.194.138:3000/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    // console.error("Error fetching user:", error);
    return null; // or handle the error as you prefer
  }
};
