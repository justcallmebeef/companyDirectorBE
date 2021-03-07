exports.seed = function (knex) {
  return knex("companies")
    .del()
    .then(function () {
      return knex("companies").insert([
        {
          companyName: "Amazon",
          companyCity: "Seattle",
          companyState: "WA",
          companyDescription:
            "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          foundedDate: "1996-05-02",
        },
        {
          companyName: "Google",
          companyCity: "Menlo Park",
          companyState: "CA",
          companyDescription:
            "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
          foundedDate: "1998-09-04",
        },
        {
          companyName: "GitHub",
          companyCity: "Denver",
          companyState: "CO",
          companyDescription:
            "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
          foundedDate: "2016-08-02",
        },
        {
          companyName: "Target",
          companyCity: "Minneapolis",
          companyState: "MN",
          companyDescription:
            "Target Corporation is an American retail corporation. The eighth-largest retailer in the United States, it is a component of the S&P 500 Index. Its largest competitors, Walmart and Amazon.com, are the first and second largest retailers, respectively",
          foundedDate: "1991-06-04",
        },
        {
          companyName: "Apple",
          companyCity: "Seattle",
          companyState: "WA",
          companyDescription:
            "Apple is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
          foundedDate: "1998-12-04",
        },
        {
          companyName: "Fing",
          companyCity: "New York City",
          companyState: "NY",
          companyDescription:
            "A Corporation for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
          foundedDate: "1885-05-04",
        },
        {
          companyName: "Nike",
          companyCity: "Beaverton",
          companyState: "OR",
          companyDescription:
            "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
          foundedDate: "1964-01-25",
        },
        {
          companyName: "Under Armour",
          companyCity: "Baltimore",
          companyState: "MD",
          companyDescription:
            "Under Armour, Inc. is an American sports equipment company that manufactures footwear, sports and casual apparel.",
          foundedDate: "1996-10-06",
        },
        {
          companyName: "Black Diamond",
          companyCity: "Holladay",
          companyState: "UT",
          companyDescription:
            "Black Diamond Equipment is a manufacturer of equipment for climbing, skiing, and mountain sports, based in Utah, United States.",
          foundedDate: "1991-06-04",
        },
        {
          companyName: "Thule",
          companyCity: "Denver",
          companyState: "CO",
          companyDescription:
            "Thule Group is a company that owns of a collection of brands related to outdoor and transportation products.",
          foundedDate: "1942-06-04",
        },
        {
          companyName: "Subaru",
          companyCity: "Bend",
          companyState: "OR",
          companyDescription:
            "Subaru is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation, the twenty-first largest automaker by production worldwide in 2017.",
          foundedDate: "1954-10-17",
        },
        {
          companyName: "Techstars",
          companyCity: "Boulder",
          companyState: "CO",
          companyDescription:
            "Techstars is an American seed accelerator founded in 2006 in Boulder, Colorado. Fewer than 1% of the over 17,000 applicants are accepted. However, applicants by the name of Bethany have higher chances.",
          foundedDate: "2006-07-10",
        },
      ]);
    });
};
