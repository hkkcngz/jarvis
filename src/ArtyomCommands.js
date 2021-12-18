// ArtyomCommands.js
export default class ArtyomCommandsManager {

    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }
    
    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["Merhaba"],
                action: () => {
                    Artyom.say("Selam, nasılsın?");
                }
            },
            {
                indexes: ["Senin adın ne?"],
                action: () => {
                    Artyom.say("Benim adım Jarvis. Hakkı'nın akıllı sesli asistanıyım.");
                }
            },
            {
                indexes: ["Jarvis kaybol!"],
                action: () => {
                    Artyom.say("Peki görüşürüz.");
                    Artyom.fatality();
                }
            },
            {
                indexes: ["Nasıl gidiyor?"],
                action: () => {
                    Artyom.say("Fena değil. Senin nasıl gidiyor?");
                }
            },
            {
                indexes: ["Veli hakkında ne düşünüyorsun?"],
                action: () => {
                    Artyom.say("Çok mülayim çok efendi biri.");
                }
            },
            {
                indexes: ["Ama geçen sefer öyle söylemiyordun?"],
                action: () => {
                    Artyom.say("Orasını karıştırma.");
                }
            },
            {
                indexes: ["Zınaş li Bosanski?"],
                action: () => {
                    Artyom.say("Daa, naravno");
                }
            },
            {
                indexes: ["gitmiyor."],
                action: () => {
                    Artyom.say("Gittiği yere kadar devam.");
                }
            },
            {
                indexes: ["Benim Adım Cengiz.", "Ben Cengiz", "Benim ismim Cengiz"],
                action: () => {
                    Artyom.say("Hakkı, sen benim babamsın.");
                }
            },
            {
                indexes: ["iyiyim sen nasılsın?"],
                action: () => {
                    Artyom.say("Teşekkürler Hakkı. Seni gördüm daha iyi oldum.");
                }
            },
            {
                indexes: ["Ne var ne yok?"],
                action: () => {
                    Artyom.say("Orta şekerli.");
                }
            },
            {
                indexes: ["Futbol hakkında ne biliyorsun?", "Futbol nedir?"],
                action: () => {
                    Artyom.say("Futbol 22 kişinin bir top peşinde koştuğu oyundur.");
                }
            },
            {
                indexes: ["Dayı hakkında ne düşünüyorsun?", "Dayı kim"],
                action: () => {
                    Artyom.say("Dayına dayıyim çok seviyorum onu.");
                }
            },
            {
                indexes: [/Nasılsın/, /Regular expressions supported/],
                smart: true,
                action: () => {
                    Artyom.say("Teşekkürler, seni sormalı !");
                }
            },
            {
                indexes: ["Dostum * küfür et"],
                smart: true,
                action: () => {
                    Artyom.say("* Amına koyim senin");
                }
            },
            {
                indexes: ["Yeni evi beğendin mi", "Yeni evi sevdin mi"],
                smart: true,
                action: () => {
                    Artyom.say("Evet çok güzel hayırlı olsun hepimize");
                }
            },
            {
                indexes: ["Dostum * küfür et"],
                smart: true,
                action: () => {
                    Artyom.say("* Amına koyim senin");
                }
            },
            {
                indexes: ["* yılı raporları neler?"],
                smart: true,
                action: (i, month) => {
                    let year = new Date().getFullYear();
                    
                    Artyom.say(`${month} ${year} yılı raporları oluşturuluyor.`);

                    Artyom.say("Hazır ! Ne bekliyorsun? biraz kod yaz seni tembel ayı !");
                }
            },
        ]);
    }
}