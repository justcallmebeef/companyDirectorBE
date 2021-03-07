exports.seed = function (knex) {
  return knex("founders")
    .del()
    .then(function () {
      return knex("founders").insert([
        {
          founderFirstName: "Jennifer",
          founderLastName: "Sibley",
          founderTitle: "CEO",
          companyId: 1,
        },
        {
          founderFirstName: "Tara",
          founderLastName: "Fick",
          founderTitle: "CTO",
          companyId: 3,
        },
        {
          founderFirstName: "Alex",
          founderLastName: "Foreman",
          founderTitle: "VP of Product",
          companyId: 1,
        },
        {
          founderFirstName: "Liz",
          founderLastName: "Dilman",
          founderTitle: "CEO",
          companyId: 2,
        },
        {
          founderFirstName: "Kelly",
          founderLastName: "Stoutsman",
          founderTitle: "Marketing Director",
          companyId: 4,
        },
        {
          founderFirstName: "Kevin",
          founderLastName: "Little",
          founderTitle: "CEO",
          companyId: 5,
        },
        {
          founderFirstName: "Dylan",
          founderLastName: "Pickles",
          founderTitle: "VP of Solutions",
          companyId: 6,
        },
        {
          founderFirstName: "Robert",
          founderLastName: "Dikeman",
          founderTitle: "Super Important Human",
          companyId: 7,
        },
        {
          founderFirstName: "Zick",
          founderLastName: "Shred",
          founderTitle: "Director of Fun",
          companyId: 9,
        },
        {
          founderFirstName: "Elle",
          founderLastName: "Dj",
          founderTitle: "Solutions Architect",
          companyId: 11,
        },
        {
          founderFirstName: "David",
          founderLastName: "Cohen",
          founderTitle: "Entrepreneur",
          companyId: 12,
        },
        {
          founderFirstName: "Brad",
          founderLastName: "Feld",
          founderTitle: "American Entrepreneur",
          companyId: 12,
        },
        {
          founderFirstName: "Jared",
          founderLastName: "Polis",
          founderTitle: "Governor of Colorado",
          companyId: 12,
        },
        {
          founderFirstName: "David",
          founderLastName: "Brown",
          founderTitle: "Managing Director",
          companyId: 12,
        },
      ]);
    });
};
