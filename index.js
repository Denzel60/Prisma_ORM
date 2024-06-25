import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// creating a single user
const createSingleUser = async () => {
  const user = await prisma.author.create({
    data: [
      {
        firstName: "Julius",
        lastName: "Irungu",
        displayName: "J.I",
        numberOfBooks: 5,
        booksWritten: [
          "atomic Habits",
          "Rich Dad, Poor Dad",
          "Meditations of Marcus",
        ],
      },
    ],
  });
  console.log(`created single user ${user}`);
};
createSingleUser();

// creating many users
const createUsers = async () => {
  const users = await prisma.author.createMany({
    data: [
      {
        firstName: "Lydia",
        lastName: "Katii",
        displayName: "L.K",
        numberOfBooks: 3,
        booksWritten: [
          "atomic Habits",
          "Rich Dad, Poor Dad",
          "Meditations of Marcus",
        ],
      },
      {
        firstName: "Caro",
        lastName: "Githe",
        displayName: "C.G",
        numberOfBooks: 3,
        booksWritten: [
          "atomic Habits",
          "Rich Dad, Poor Dad",
          "Meditations of Marcus",
        ],
      },
      {
        firstName: "Alex",
        lastName: "Githi",
        displayName: "A.G",
        numberOfBooks: 7,
        booksWritten: [
          "atomic Habits",
          "Rich Dad, Poor Dad",
          "Meditations of Marcus",
        ],
      },
    ],
  });
  console.log(`created users ${users}`);
};
createUsers();

// displaying all users
const findAllUsers = async () => {
  const authors = await prisma.author.findMany();
  console.log(authors);
};
findAllUsers();

// displaying a specific column
const displaySpecificColumn = async () => {
  const user = await prisma.author.findMany({
    select: {
      firstName: true,
      lastName: true,
    },
  });
  console.log(user);
};
displaySpecificColumn();

// satisfy a certain condition
const findSpecificUser = async () => {
  const user = await prisma.author.findFirst({
    where: { id: 1 },
    select: { firstName: true },
  });
  console.log(user);
};
findSpecificUser();

// updating a user
const updateUser = async () => {
  const updateduser = await prisma.author.update({
    where: { id: 1 },
    data: { firstName: "Web", lastName: "Ifedha" },
  });
  console.log(updateduser);
};
updateUser();

// deleting a user
const deleteSpecificUser = async () => {
  const deletedUser = await prisma.author.delete({
    where: {
      id: 40,
    },
  });
  console.log(deletedUser);
};
deleteSpecificUser();

// delete many users
const deleteManyUsers = async () => {
  const deletedUser = await prisma.author.deleteMany({
    where: { id: 37, id: 38 },
  });
  console.log(deletedUser);
};
deleteManyUsers();
