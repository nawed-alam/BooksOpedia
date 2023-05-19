const submit = document.getElementById("submit");

const bookName = document.getElementById("BookNameInput");

submit.addEventListener("click", validate);

function validate(e) {
  const names = new Map([
    ["HarryPotter", "Harry Potter"],
    ["FantasticBeasts", "Fantastic Beasts"],
    ["TheInkBlackHeart", "The Ink Black Heart"],
    ["TroubledBlood", "Troubled Blood"],
    ["TheIckaboge", "The Ickabog"],
    ["Hamlet", "Hamlet"],
    ["Macbeth", "Macbeth"],
    ["RomeoAndJuliet", "Romeo and Juliet"],
    ["MerchantOfVenice", "The Merchant of Venice"],
    ["JuliusCaesar", "Julius Caesar"],
    ["It", "It"],
    ["TheShining", "The Shining"],
    ["Carrie", "Carrie"],
    ["TheStand", "The Stand"],
    ["Misery", "The Misery"],
    ["GreatExpectations", "Great Expectations"],
    ["OliverTwist", "Oliver Twist"],
    ["DavidCopperfield", "David Copperfield"],
    ["AChristmasCarol", "A Christmas Carol"],
    ["ThePickwickPapers", "The Pickwick Papers"],
    ["Dracula", "Dracula"],
    ["TheHauntingOfHillHouse", "The Haunting of Hill House"],
    ["Frankenstein", "Frankenstein"],
    ["TheExorcist", "The Exorcist"],
    ["Watchmen", "Watchmen"],
    ["TheSandman", "The Sandman"],
    ["Bone", "Bone"],
    ["JonathanHickman", "Jonathan Hickman's Marvel-verse"],
    ["MindMGMT", "Mind MGMT"],
    ["RedWhiteAndRoyalBlue", "Red, White & Royal Blue"],
    ["TheKissQuotient", "The Kiss Quotient: TikTok Made Me Buy It!"],
    ["Outlander", "Outlander"],
    ["ItEndsWithUs", "It Ends with Us"],
    ["JaneEyre", "Jane Eyre"],
    ["TheGreatGatsby", "The Great Gatsby"],
    ["NineTeenEightyFour", "Nineteen Eighty-Four"],
    ["TheCatcherInTheRye", "The Catcher in the Rye"],
    ["Beloved", "Beloved"],
    ["AtomicHabits", "Atomic Habits"],
    ["Ikigai", "Ikigai"],
    ["TheAlchemist", "The Alchemist"],
    ["TheDaVinciCode", "The Da Vinci Code"],
  ]);
  const links = new Map([
    [
      "HarryPotter",
      "https://www.amazon.in/s?k=Harry+Potter&crid=2Y4TJ1NQ2F92Q&sprefix=harry+potter+%2Caps%2C294&ref=nb_sb_noss_2",
    ],
    [
      "FantasticBeasts",
      "https://www.amazon.in/Fantastic-Beasts-Where-Find-Them/dp/1408880717/ref=sr_1_2?crid=2K7ZMZ7WIOC2M&keywords=Fantastic+Beasts+and+Where+to+Find+Them&qid=1677245075&sprefix=fantastic+beasts+and+where+to+find+them%2Caps%2C308&sr=8-2",
    ],
    [
      "TheInkBlackHeart",
      "https://www.amazon.in/Ink-Black-Heart-Robert-Galbraith/dp/0751584185/ref=sr_1_1?crid=2W5WLINEGVWTG&keywords=The+Ink+Black+Heart&qid=1677244691&sprefix=the+ink+black+heart%2Caps%2C295&sr=8-1",
    ],
    [
      "TroubledBlood",
      "https://www.amazon.in/s?k=Troubled+Blood&crid=3JILKIVEHT94C&sprefix=troubled+blood%2Caps%2C315&ref=nb_sb_noss_1",
    ],
    [
      "TheIckaboge",
      "https://www.amazon.in/s?k=The+Ickabog&crid=GB1OJ0PQO8TK&sprefix=the+ickabog%2Caps%2C286&ref=nb_sb_noss_1",
    ],
    [
      "Hamlet",
      "https://www.amazon.in/Hamlet-William-Shakespeare/dp/8175992921/ref=sr_1_1_sspa?crid=1859B4OL8HE8S&keywords=hamlet&qid=1677252733&sprefix=hamlet%2Caps%2C443&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "Macbeth",
      "https://www.amazon.in/Macbeth-Pocket-Classics-William-Shakespeare/dp/9389178517/ref=sr_1_1_sspa?crid=2850OITJ9STGF&keywords=Macbeth&qid=1677252787&sprefix=macbeth%2Caps%2C300&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "RomeoAndJuliet",
      "https://www.amazon.in/Romeo-Juliet-William-Shakespeare/dp/9380816278/ref=sr_1_3?crid=3O0MD3M29FINO&keywords=Romeo+and+Juliet&qid=1677252813&sprefix=romeo+and+juliet%2Caps%2C292&sr=8-3",
    ],
    [
      "MerchantOfVenice",
      "https://www.amazon.in/Merchant-Venice-William-Shakespeare/dp/9389931029/ref=sr_1_1_sspa?crid=U3DMJH0FY283&keywords=The+Merchant+of+Venice&qid=1677252850&sprefix=the+merchant+of+venice%2Caps%2C314&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "JuliusCaesar",
      "https://www.amazon.in/Julius-Caesar-William-Shakespeare/dp/9386538040/ref=sr_1_2_sspa?crid=379LPSPG6UKUQ&keywords=Julius+Caesar&qid=1677252869&sprefix=julius+caesar%2Caps%2C301&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "It",
      "https://www.amazon.in/Stephen-King/dp/1444707868/ref=sr_1_1?crid=2EJBLS2TVYII6&keywords=Stephen+King+It&qid=1677253098&sprefix=stephen+king+it+%2Caps%2C579&sr=8-1",
    ],
    [
      "TheShining",
      "https://www.amazon.in/Shining-Stephen-King/dp/1444720724/ref=sr_1_3?crid=32EI00TPMHIM1&keywords=The+Shining&qid=1677253125&sprefix=the+shining%2Caps%2C516&sr=8-3",
    ],
    [
      "Carrie",
      "https://www.amazon.in/Carrie-Stephen-King/dp/1444720694/ref=sr_1_1?crid=1Z0ZFWERZ8M83&keywords=carrie+stephen+king&qid=1677253163&sprefix=Carrie%2Caps%2C581&sr=8-1",
    ],
    [
      "TheStand",
      "https://www.amazon.in/Stand-Stephen-King/dp/1444720732/ref=sr_1_1?crid=1OP3VY0DYZATG&keywords=the+stand+by+stephen+king&qid=1677253184&sprefix=The+Stand%2Caps%2C545&sr=8-1",
    ],
    [
      "Misery",
      "https://www.amazon.in/Misery-Stephen-King/dp/1444720716/ref=sr_1_3?crid=12YG3DMQZ8OOT&keywords=misery+stephen+king&qid=1677253213&sprefix=Misery%2Caps%2C525&sr=8-3",
    ],
    [
      "GreatExpectations",
      "https://www.amazon.in/Great-Expectations-Charles-Dickens/dp/8175993782/ref=sr_1_2_sspa?crid=1MRLCY0S4JJ2G&keywords=great+expectations+by+charles+dickens&qid=1677252903&sprefix=Great+Expectations%2Caps%2C304&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&smid=A3H3WE9M6NY1KV",
    ],
    [
      "OliverTwist",
      "https://www.amazon.in/OLIVER-TWIST-Charles-Dickens/dp/8175993707/ref=sr_1_3?crid=DI43E06CXPSA&keywords=oliver+twist+charles+dickens&qid=1677252937&sprefix=Oliver+Twist%2Caps%2C299&sr=8-3",
    ],
    [
      "DavidCopperfield",
      "https://www.amazon.in/David-Copperfield-Charles-Dickens/dp/8175994282/ref=sr_1_1_sspa?crid=2UTYUP9ICZ0T8&keywords=david+copperfield+by+charles+dickens&qid=1677252963&sprefix=David+Copperfield%2Caps%2C291&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "AChristmasCarol",
      "https://www.amazon.in/Christmas-Carol-Charles-Dickens/dp/8175993278/ref=sr_1_1_sspa?crid=1HLSN0SBECMUV&keywords=a+christmas+carol+by+charles+dickens&qid=1677252993&sprefix=A+Christmas+Carol%2Caps%2C303&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "ThePickwickPapers",
      "https://www.amazon.in/Pickwick-Papers-Penguin-Classics/dp/0140436111/ref=sr_1_4?crid=1VU7M85HND3GG&keywords=the+pickwick+papers+by+charles+dickens&qid=1677253015&sprefix=The+Pickwick+Papers%2Caps%2C671&sr=8-4",
    ],
    [
      "Dracula",
      "https://www.amazon.in/Dracula-Bram-Stoker/dp/8172344775/ref=sr_1_1_sspa?crid=N0E5IR7G1VD1&keywords=Dracula&qid=1677253704&sprefix=dracula%2Caps%2C881&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "TheHauntingOfHillHouse",
      "https://www.amazon.in/Haunting-House-Penguin-Modern-Classics/dp/0141191449/ref=sr_1_3?crid=6IGSDBGXJLRQ&keywords=The+Haunting+of+Hill+House&qid=1677253723&sprefix=the+haunting+of+hill+house%2Caps%2C613&sr=8-3",
    ],
    [
      "Frankenstein",
      "https://www.amazon.in/s?k=Frankenstein&crid=E1R9EECHX6AM&sprefix=frankenstein%2Caps%2C659&ref=nb_sb_noss_1",
    ],
    [
      "TheExorcist",
      "https://www.amazon.in/Exorcist-Anniversary-William-Peter-Blatty/dp/006209436X/ref=sr_1_1_sspa?crid=INUVEHR7I8X3&keywords=The+Exorcist&qid=1677253818&sprefix=the+exorcist%2Caps%2C849&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "Watchmen",
      "https://www.amazon.in/Watchmen-2019-Alan-Moore/dp/1779501129/ref=sr_1_5?crid=1AL529U9EBD6N&keywords=Watchmen&qid=1677253854&sprefix=watchmen%2Caps%2C537&sr=8-5",
    ],
    [
      "TheSandman",
      "https://www.amazon.in/s?k=The+Sandman&crid=1357L65DQI7QK&sprefix=the+sandman%2Caps%2C565&ref=nb_sb_noss_1",
    ],
    [
      "Bone",
      "https://www.amazon.in/Bone-Graphic-Novel-Treasure-Hunters/dp/9352754786/ref=sr_1_10?crid=18ESU70SZ8XJR&keywords=bone+comic&qid=1677253955&sprefix=Bone+comi%2Caps%2C299&sr=8-10",
    ],
    [
      "JonathanHickman",
      "https://www.amazon.in/Avengers-Jonathan-Hickman-Complete-Collection/dp/1302925091",
    ],
    [
      "MindMGMT",
      "https://www.amazon.in/s?k=Mind+MGMT&i=stripbooks&crid=3GYOJQIJBIB89&sprefix=mind+mgmt%2Cstripbooks%2C735&ref=nb_sb_noss_2",
    ],
    [
      "RedWhiteAndRoyalBlue",
      "https://www.amazon.in/Red-White-Royal-Blue-Novel/dp/1250316774/ref=sr_1_2?crid=1YLPV80B0CX7&keywords=Red%2C+White+%26+Royal+Blue&qid=1677253476&sprefix=red%2C+white+%26+royal+blue%2Caps%2C759&sr=8-2",
    ],
    [
      "TheKissQuotient",
      "https://www.amazon.in/Kiss-Quotient-Helen-Hoang-ebook/dp/B0792L7HRN/ref=sr_1_1?crid=MC59Y1YHCNUC&keywords=The+Kiss+Quotient%3A+TikTok+Made+Me+Buy+It%21&qid=1677253537&sprefix=the+kiss+quotient+tiktok+made+me+buy+it+%2Caps%2C951&sr=8-1",
    ],
    [
      "Outlander",
      "https://www.amazon.in/Outlander-Diana-Gabaldon/dp/1784751375/ref=sr_1_2?crid=ETQKG3QDW6KE&keywords=Outlander&qid=1677253574&sprefix=outlander%2Caps%2C530&sr=8-2",
    ],
    [
      "ItEndsWithUs",
      "https://www.amazon.in/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/ref=sr_1_2?crid=N0LEBE2KI508&keywords=It+Ends+with+Us&qid=1677253592&sprefix=it+ends+with+us%2Caps%2C678&sr=8-2",
    ],
    [
      "JaneEyre",
      "https://www.amazon.in/Charlotte-Bronte-Jane-Eyre-PB/dp/812914011X/ref=sr_1_1_sspa?crid=24CM0FF8R5QCQ&keywords=Jane+Eyre&qid=1677253265&sprefix=jane+eyre%2Caps%2C567&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    ],
    [
      "TheGreatGatsby",
      "https://www.amazon.in/Great-Gatsby-F-Scott-Fitzgerald/dp/8172344562/ref=sr_1_3?crid=2BN5NBJAI8UNE&keywords=The+Great+Gatsby&qid=1677253233&sprefix=the+great+gatsby%2Caps%2C600&sr=8-3",
    ],
    [
      "NineTeenEightyFour",
      "https://www.amazon.in/1984-Nineteen-Eighty-Four-Internationally-Classics/dp/0008322066/ref=sr_1_1?crid=3KRVUUYJYVYV3&keywords=Nineteen+Eighty-Four&qid=1677253300&sprefix=nineteen+eighty-four%2Caps%2C733&sr=8-1",
    ],
    [
      "TheCatcherInTheRye",
      "https://www.amazon.in/Catcher-Rye-J-D-Salinger/dp/0241950422/ref=sr_1_3?crid=19RXAZ1NS1NGA&keywords=The+Catcher+in+the+Rye&qid=1677253329&sprefix=the+catcher+in+the+rye%2Caps%2C650&sr=8-3",
    ],
    [
      "Beloved",
      "https://www.amazon.in/Beloved-Toni-Morrison/dp/0099273934/ref=sr_1_3?crid=XDHL0G9CQQXC&keywords=Beloved&qid=1677253355&sprefix=beloved%2Caps%2C663&sr=8-3",
    ],
    [
      "AtomicHabits",
      "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_3?keywords=atomic+habits&qid=1677303147&sprefix=atomic%2Caps%2C194&sr=8-3",
    ],
    [
      "Ikigai",
      "https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_3?crid=QCCQB95BC324&keywords=ikigai&qid=1677303199&sprefix=iki%2Caps%2C200&sr=8-3",
    ],
    [
      "TheAlchemist",
      "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_3?crid=23RZSRKMZOV05&keywords=the+alchemist&qid=1677303268&sprefix=the+%2Caps%2C203&sr=8-3",
    ],
    [
      "TheDaVinciCode",
      "https://www.amazon.in/Vinci-Code-Robert-Langdon/dp/0552161276/ref=sr_1_2?crid=4LXYE2A294FN&keywords=the+vinci+code&qid=1677303316&sprefix=the+vinci+code%2Caps%2C196&sr=8-2",
    ],
  ]);

  const InputName = bookName.value;

  switch (InputName) {
    case names.get("HarryPotter"):
      window.open(links.get("HarryPotter"));
      break;
    case names.get("FantasticBeasts"):
      window.open(links.get("FantasticBeasts"));
      break;
    case names.get("TheInkBlackHeart"):
      window.open(links.get("TheInkBlackHeart"));
      break;
    case names.get("TroubledBlood"):
      window.open(links.get("TroubledBlood"));
      break;
    case names.get("TheIckaboge"):
      window.open(links.get("TheIckaboge"));
      break;
    case names.get("Hamlet"):
      window.open(links.get("Hamlet"));
      break;
    case names.get("Macbeth"):
      window.open(links.get("Macbeth"));
      break;
    case names.get("RomeoAndJuliet"):
      window.open(links.get("RomeoAndJuliet"));
      break;
    case names.get("MerchantOfVenice"):
      window.open(links.get("MerchantOfVenice"));
      break;
    case names.get("JuliusCaesar"):
      window.open(links.get("JuliusCaesar"));
      break;
    case names.get("It"):
      window.open(links.get("It"));
      break;
    case names.get("TheShining"):
      window.open(links.get("TheShining"));
      break;
    case names.get("Carrie"):
      window.open(links.get("Carrie"));
      break;
    case names.get("TheStand"):
      window.open(links.get("TheStand"));
      break;
    case names.get("Misery"):
      window.open(links.get("Misery"));
      break;
    case names.get("GreatExpectations"):
      window.open(links.get("GreatExpectations"));
      break;
    case names.get("OliverTwist"):
      window.open(links.get("OliverTwist"));
      break;
    case names.get("DavidCopperfield"):
      window.open(links.get("DavidCopperfield"));
      break;
    case names.get("AChristmasCarol"):
      window.open(links.get("AChristmasCarol"));
      break;
    case names.get("ThePickwickPapers"):
      window.open(links.get("ThePickwickPapers"));
      break;
    case names.get("Dracula"):
      window.open(links.get("Dracula"));
      break;
    case names.get("TheHauntingOfHillHouse"):
      window.open(links.get("TheHauntingOfHillHouse"));
      break;
    case names.get("Frankenstein"):
      window.open(links.get("Frankenstein"));
      break;
    case names.get("TheExorcist"):
      window.open(links.get("TheExorcist"));
      break;
    case names.get("Watchmen"):
      window.open(links.get("Watchmen"));
      break;
    case names.get("TheSandman"):
      window.open(links.get("TheSandman"));
      break;
    case names.get("Bone"):
      window.open(links.get("Bone"));
      break;
    case names.get("JonathanHickman"):
      window.open(links.get("JonathanHickman"));
      break;
    case names.get("MindMGMT"):
      window.open(links.get("MindMGMT"));
      break;
    case names.get("RedWhiteAndRoyalBlue"):
      window.open(links.get("RedWhiteAndRoyalBlue"));
      break;
    case names.get("TheKissQuotient"):
      window.open(links.get("TheKissQuotient"));
      break;
    case names.get("Outlander"):
      window.open(links.get("Outlander"));
      break;
    case names.get("ItEndsWithUs"):
      window.open(links.get("ItEndsWithUs"));
      break;
    case names.get("JaneEyre"):
      window.open(links.get("JaneEyre"));
      break;
    case names.get("TheGreatGatsby"):
      window.open(links.get("TheGreatGatsby"));
      break;
    case names.get("NineTeenEightyFour"):
      window.open(links.get("NineTeenEightyFour"));
      break;
    case names.get("TheCatcherInTheRye"):
      window.open(links.get("TheCatcherInTheRye"));
      break;
    case names.get("Beloved"):
      window.open(links.get("Beloved"));
      break;
    case names.get("AtomicHabits"):
      window.open(links.get("AtomicHabits"));
      break;
    case names.get("Ikigai"):
      window.open(links.get("Ikigai"));
      break;
    case names.get("TheAlchemist"):
      window.open(links.get("TheAlchemist"));
      break;
    case names.get("TheDaVinciCode"):
      window.open(links.get("TheDaVinciCode"));
      break;
    default:
      window.location.replace("https://www.amazon.in/Books/b?ie=UTF8&node=976389031");
  }
}
