'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;

const SKILL_NAME = 'religious Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const Hinduismdata = [
'Hinduism is the oldest known religion in the world. In fact it goes back as far as 5000-10000 B.C',

'There is no known founder or governing body of Hinduism.',

'Hinduism is not the real word for the religion. That was made up by Greeks and Arabs to those living by the Sindhu river. The real name for Hinduism is Sanatana Dharma. This means eternal dharma or eternal truth.',

'Hindus believe the purpose of life is to attain self-realization or enlightenment.',

'Hinduism is the 3rd largest religion in the world, with over a billion followers.',

'Hindus believe there is only one unmanifested eternal reality that can be found through enlightenment. This one reality has taken on the form of everything we see today- including gods and goddesses. So even though they worship many gods in reality its a monotheistic religion.',

'Dharma (righteousness) Artha (means of money) Kama (right desire) and Moksha (salvation) make up the 4 main life-goals of Hinduism.',

'The major books of Hinduism are: the Vedas Ramayana  Bhagavad Gita 18 Puranas and Mahabharata.',

'The most common language for Hindu scriptures is Sanskrit- the oldest language in the world.',

'Hinduism strongly encourages a vegetarian diet- something that many Hindus follow. However many practitioners in India simply omit beef and pork from their diet and follow vegetarian guidelines on auspicious days.',

'Hindus believe in reincarnation- the soul is immortal but takes on the form of many bodies until they achieve enlightenment',

'The Rig Veda is the oldest known book in the world.',

'The Vedas were preserved for over 5000 years without the use of printing. This was done by memorization!',

'The ideas of decimals and many other complex math equations were created by Hindus.',

'Om is considered to be the subtle sound of the universe and can be heard in deep meditation.',

'The supreme divine spirit is considered to be both male and female.',

'Yoga Pranayama Meditation Vastu Jyotish Tantra Astrology are huge contributions to the world and have become extremely popular in the west…often influencing many different aspects of culture- fashion diet lifestyle and spirituality.',

'The Kumbhamela a spiritual gathering of all types every 3 years is the largest gathering of human beings in the world.',

'There are three major sects in Hinduism: Shaiva Shakti and Vaishnava. But these are not strict a follower can practice multiple paths because theyre so similar.',

'Hinduism accepts the idea that anyone in any religion can attain salvation/enlightenment through perseverance devotion and personal experience in deep prayer or meditation. Instead of closing off to many religions they have opened themselves up to it.'


   ];
   
const Islamdata = [
'Islam means surrender or submission. Salam (which means peace) is the root word of Islam. In a religious context the word Islam means the surrendering of ones will (without compulsion) to the true will of God in an effort to achieve peace.',

'Muslim means anyone or anything that surrenders itself to the true will of God. By this definition everything in nature (trees animals planets etc.) are muslims because they are in a state of surrender to Gods will. In other words they are fulfilling the purpose for which God created them.',

' Islam is not a new religion or cult. It is a universal way of life and civilization. Studies show that between 1.5 and 1.8 billion people in the world identify their religion as Islam. Along with Judaism and Christianity it traces its roots through Prophet Abraham and back to the first humans Adam and Eve.',

'There are five pillars of practice in Islam. These practices must be undertaken with the best of effort in order to be considered a true Muslim: A) Declaration of faith: A statement proclaiming the belief in One God and that Muhammad is a prophet of God. To become Muslim a person simply recites this statement publicly and in Arabic. B) Formal prayer five times a day. C) Poor-due tax: 2.5% of ones excess wealth given to the needy once a year. D) Fasting during the daylight hours in the month of Ramadan. E) Pilgrimage to Mecca at least once if physically and financially able.',

'There are six articles of faith in Islam. These are the basic beliefs that one must have in order to be considered a true Muslim. They are belief in: A) the One God. B) all of the true prophets of God. C) the original scriptures revealed to Moses David Jesus and Muhammad. D) the angels. E) the Day of Judgment and the Hereafter. F) destiny.',

'The Islamic concept of God is that He is loving merciful and compassionate. Islam also teaches that He is all-knowing and the perfect judge of affairs, and will punish (or forgive) accordingly. However Allah once said to Muhammad, My mercy prevails over my wrath. So Islam teaches a balance between fear and hope protecting one from both complacency and despair.',

'Muslims believe that God has revealed 99 of His names or attributes in the Quran. It is through these names that one can come to know the Creator. A few of these names are the All-Merciful the All-Knower the Protector the Provider the Near the First the Last the Hidden and the Source of All Peace.',

'The Christian concept of vicarious atonement (the idea that Jesus died for the sins of humanity) is alien to the Islamic concept of personal responsibility. Islam teaches that on the Day of Judgment every person will be resurrected and will be accountable to God for their every word and deed. Consequently a practicing Muslim is always striving to be righteous while hoping and praying for God’s acceptance and grace.',

'Muslims believe in all of the true prophets that preceded Muhammad, from Adam to Jesus. Muslims believe they brought the same message of voluntarily surrendering to God’s will (islam, in a generic sense) to different peoples at different times. Muslims also believe they were muslims (again, in a generic sense) since they followed God’s true guidance and surrendered their will to Him.',

'Muslims neither worship Muhammad nor pray through him. Muslims worship the Unseen, Omniscient Creator Allah.',

'Muslims accept the original unaltered Torah (as revealed to Moses) and the original unaltered Bible (as revealed to Jesus) since they were revealed by God. But none of these scriptures exist today in their original form or in their entirety. Therefore, Muslims follow the subsequent, final and preserved revelation of God the Quran.',

'The Quran was not authored by Muhammad. It was authored by God revealed to Muhammad (through angel Gabriel) and written into physical form by his companions.',

'The original Arabic text of the Quran contains no flaws or contradictions and has not been altered since its revelation.',

'Actual 7th century Qurans complete and intact are on display in museums in Turkey and other places around the world.',

'If all Qurans in the world today were destroyed the original Arabic would still remain. This is because millions of Muslims called hafiz (or guardians) have memorized the text letter for letter from beginning to end every word and every syllable. Also chapters from the Quran are precisely recited from memory in each of the five formal prayers performed daily by hundreds of millions of Muslims throughout the world.',

'Women are not oppressed in Islam. Any Muslim man that oppresses a woman is not following Islam. Among the many teachings of Muhammad that protected the rights and dignity of women is his saying “…the best among you are those who treat their wives well.”',

'Islam grants women many rights in the home and in society. Among them are the right to earn money to financial support to own property to an education to an inheritance to being treated kindly to vote to a bridal gift to keep their maiden name to worship in a mosque to a divorce and so on.',

'Muslim women wear the head-covering (hijab) in fulfillment of Gods decree to dress modestly. This type of modest dress has been worn by religious women throughout time such as traditional Catholic nuns Mother Teresa and the Virgin Mary.',

'The hajj is an annual pilgrimage to the Kaaba made by about 3 million Muslims from all corners of the Earth. It is performed to fulfill one of the pillars of Islam. The rituals of hajj commemorate the struggles of Abraham his wife Hagar and their son Ishmael in surrendering their wills to God.',
   
   
   ];
   
   
const Christianitydata =[
    'A 62-foot Jesus statue built by a megachurch was destroyed by a lightning strike and subsequent fire',
    
    'Christianity was the main religion in Egypt between the Fourth and Sixth Centuries',
    
    'Christianity is one of the most influential religions in history. Its the largest religion the world has ever known and its responsible for the largest institution the world has ever known, the Christian Church.',
    
    'Christianitys founder Jesus Christ although of humble origins impacted the world more than kings presidents military leaders, and politicians, even though he died in his early thirties. With so much information in the world on Christianity, it can be difficult to separate fact from fiction, yet this page aims to help people get started with that task.',
    
    'Christianity is the worlds largest religion, with over 2.4 billion adherents, about a third of the worlds population.',
    
    'In 2001 the World Christian Encyclopedia counted 33,830 different Christian denominations',
    
    'Christians believe that Jesus is the Son of God and the savior of humanity whose coming as the Messiah was prophesied in the Old Testament.',
    
    'The three largest branches of Christianity are the Roman Catholic Church the Eastern Orthodox Church and the various denominations of Protestantism.'
    ];
    
const jainismdata = [
   'Jains believe that all living beings from plants to animals to bacteria have souls and that theoretically all souls have the potential to attain nirvana.',
   
   'Jain doctrine holds that Jainism has always existed and always will exist. There is no creator god or a god as judge, and Jains do not "worship" any particular being, but admire and aspire to be like the liberated souls that have attained nirvana.',
   
   'ainism maintains that there are multiple universes. We live in Bharat Kshetra  which is one of the three universes that has the potential for religion. It is possible for us to be reborn in any of the universes.',
   
   ' In Jainism, the swastika has a different meaning than it does in the other Indian religions. The four quadrants/dots represent the four gatis or states of existence (humans, heavenly beings, plants/animals/etc., and hellish beings). Souls can pass through any or all of the four gatis throughout the cycle of birth and death, and all are merely temporary states of being.',
   
   'ains are the most educated religious group in India, and among the richest in America.',
   
   'The way to reach moksha in Jainism requires not only ridding oneself of bad karma (paap) but also removing all good karma (punya).',
   
   'Jains do not worship a god or saint, and instead work to attain nirvana as they believe other liberated souls have attained.',
   
   'Most Jains do not eat mushrooms honey or root vegetables. They also do not drink alcohol or take drugs that alter the mind.',
   
   'In August or September Jains hold their most important festival called Paryushana, or Daslakshana. During this 8-10 day festival Jains often fast meditate, and emphasize the five main vows of abstinence.'
   ];
   
const Sikhismdata = [
    'The concept of "God" is different in Sikhism than that of other religions. It is known as "Ik Onkar" or "one constant". It is found in the Gurmukhi script that God has no gender in Sikhism (though translations may present a male God); it is also "Akaal Purkh" (beyond time and space) and "Nirankar" (without form).',
    
    'Guru Gobind Singh was the last Guru of the Sikhs in human form. He created the Khalsa, a spiritual brotherhood and sisterhood devoted to purity of thought and action. He gave the Khalsa a distinctive external form to remind them of their commitment, and to help them maintain an elevated state of consciousness. Every Sikh baptized as Khalsa vows to wear the Five "Ks" – Kesh, Kangha, Katchera , Kara and Kirpan.',
    
    'Turbans go way back in history as part of a spiritual practice. The top of your head is the tenth gate or the crown chakra. It is normally covered by hair that acts as antennae to protect the top of the head from sun and exposure, as well as to channel sun and the energy.',
    
    'Yogis or Sikhs do not cut their hair, they coil or knot it on top of head on their solar center. In men the solar center is on top of the head at the front. Women have two solar centers: one is at the center of the crown chakra, the other is on top of the head towards the back. For all, coiling the hair at the solar centers channels one’s radiant energy and helps retain a spiritual focus.',
    
    'The authority accorded to the Guru Granth Sahib certainly sets it apart from other scriptural texts of the major world religions. The Guru Granth Sahib was compiled by the Sikh Gurus themselves and is primarily comprised of writings composed by the Gurus. This collection also includes the devotional writings of other religious figures, including Muslim Sufis and Hindu Bhaktas.',
    
    'Sikhism instructs not to believe in good moments, or bad moments, good days or bad days, good numbers or bad numbers. According to Sikhism, all days of the week and all numbers are the same, no one day or a number is better than the other.',
    
    'In fourteenth century before the time Guru Nanak Dev Ji Indian women were severely degraded and oppressed by their society. Her function was only to perpetuate the race do household work and serve the male members of society. Female infanticide was common and the practice of sati was encouraged sometimes even forced. Guru Amar Das Ji the third Guru of Sikhs raised his voice and denounced the Sati system.',
    ];
    
const Buddhismdata = [
   
    'The term ‘Buddhism’ was coined by Western scholars in the 1830s. Buddhists don’t actually refer to their religion as “Buddhism',
   
    'Buddhism originated from around 400BC with the historical individual known as the Buddha.',
   
    'The first mention of the Buddha in Western writing is in the writings of Clement of Alexandria, 2 AD.',         
   
    'The Buddha founded an order of monks and nuns known as the Sangha who have preserved his teachings down to the present day.',
   
    'Buddhism is an extensive and internally diverse tradition with two main branches.',
   
    'With 360 million followers, Buddhism is the fourth largest religion in the world.',
   
    'In Buddhism, there is no single holy book. Extensive scriptures have been preserved in many Asian languages.',
   
    'Because of its emphasis on meditation and mindfulness, Buddhism is often considered to be a form of psychology rather than a religion.',
   
    'Many traditional Buddhists believe in reincarnation and rebirth. Modern Buddhists believe this idea can be jettisoned without losing any central value.',
   
    'Buddhists dont believe in a supreme being or creator god.',
    ];

    var Rel;
const handlers = {
    'LaunchRequest': function () {
         this.emit(':ask',"Select a religion you want a fact about we have hinduism, Sikhism, Islam, Christianity, jainism, Buddhism");
    },
//  'ReligionIntent': function () {
//     },
    'GetNewFactIntent': function () {
        Rel = this.event.request.intent.slots.religion.value;

        if(Rel =="Hinduism")
        {
        const factArr = Hinduismdata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        
        this.emit(':ask',speechOutput);
        }
        
        
        if(Rel =="Buddhism")
        {
        const factArr = Buddhismdata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        
        this.emit(':ask',speechOutput);
        }
        if(Rel =="Sikhism")
        {
        const factArr = Sikhismdata;
         const factIndex = Math.floor(Math.random() * factArr.length);
         const randomFact = factArr[factIndex];
         const speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':ask',speechOutput);
        
        }
        
        if(Rel =="Islam")
        {
        const factArr = Islamdata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':ask',speechOutput);
        }
        
         if(Rel =="Christianity")
        {
        const factArr = Christianitydata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;
                this.emit(':ask',speechOutput);

        }
        
         if(Rel =="Jainism")
        {
        const factArr = jainismdata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;
                this.emit(':ask',speechOutput);

        }
        
            
        },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
     'SessionEndedRequest': function () {
        const speechOutput = '';
        
        this.emit(':tell', speechOutput);
      },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
