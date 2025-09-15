const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "owner",
    version: 2.0,
    author: "〲 siyuu ツ",
    longDescription: "info about bot and owner",
    category: "Special",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const imgURL = "https://files.catbox.moe/32ffse.jpg";
    const attachment = await global.utils.getStreamFromURL(imgURL);

    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;

    const ment = [{ id: id, tag: name }];
    
    const a = "-`ღ´ᵞᴼᵁᴿ 🌷𝐁𝐁'𝐗᯽";
    const b = "."; // Prefix
    const c = "〲 SIYUU ツ";
    const e = "Male";
    const f = "KOMU NH";
    const g = "𝐒𝐢𝐧𝐠𝐥𝐞";
    const h = "KOMU NH ";
    const i = "MYMENSING";
    const d = "N/A";

    message.reply({ 
      body: `᯽ ${name} ᯽

᯽Bot's Name: ${a}
᯽ Bot's prefix: ${b}  
᯽Owner: ${c}
᯽ Gender: ${e}
᯽ Owners Messenger: ${d}
᯽ Age: ${f}
᯽ Relationship: ${g}
᯽Class: ${h}
᯽ Basa: ${i}`,
      mentions: ment,
      attachment: attachment
    });
  }
};
