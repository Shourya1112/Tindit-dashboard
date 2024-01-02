const siteMap = [
    {
      title: "User", 
      to: "/user",
      subTab: [],
    }, {
      title: "Organisation", 
      to: "/org",
      subTab: [
        { title: "org", to: "/org1"},
        { title: "org roles", to: "/org-roles"},
      ],
    }, {
      title: "Industry", 
      to: "/industry",
      subTab: [],
    }, {
      title: "Roles", 
      to: "/roles",
      subTab: [
        { title: "sub role", to: "/sub-role"},
      ],
    }, {
      title: "Words", 
      to: "/words",
      subTab: [
        { title: "power words", to: "/power-words"},
        { title: "weak words", to: "/weak-words"},
      ],
    }, {
      title: "Competency", 
      to: "/competency",
      subTab: [
        { title: "master", to: "/master"},
        { title: "sub", to: "/sub"},
        { title: "sentiment", to: "/sentiment"},
      ],
    }, {
      title: "Sean", 
      to: "/sean",
      subTab: [],
    },
]

export default siteMap;