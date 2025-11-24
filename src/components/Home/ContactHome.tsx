import { useRef, useState, type FormEvent } from "react";
import FlyBalloon from "../FlyBalloon";
import AnimatedOnScroll from "../Global/AnimationOnScroll";
import SocialIcons from "../Nav/Socials";
import emailjs from "@emailjs/browser";


const emailSender = (formElmemnt: HTMLFormElement)=>{
  const SERVICEid = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATEid = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLICKKEY = import.meta.env.VITE_PUBLIC_KEY;
  

  return emailjs.sendForm(SERVICEid, TEMPLATEid, formElmemnt, {
      publicKey: PUBLICKKEY,
  })
}


export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailRegex.test(email)){
        return '';
    }else{
        return "Вашата елктронна поща не е валидна!"
    }
};



export default function ContactHome(){
  const [formMsg, setFormMsg] = useState('');
  const [sending, setSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailSuccess, setEmailSuccess] = useState(false);


  const sendEmail = async (formHTML: HTMLFormElement)=>{
        setSending(true);
        try{
          await emailSender(formHTML);
          formHTML.reset()
          setSending(false);
          setEmailSuccess(true);
          setFormMsg('Имейлът е изпратен успешно! Ще се свържем с Вас скоро.')


          setTimeout(()=>{
            setFormMsg("");
            setEmailSuccess(false);
          }, 5000)
        }catch(err){
          console.log(err);
          setSending(false);
          formHTML.reset()
          setFormMsg("Нещо се обърка! Моля изберете друг начин да се свържете с нас.");
          setEmailSuccess(false);

          setTimeout(()=>{
            setFormMsg("");
            setEmailSuccess(false);
          }, 5000)
        }
    }


  let submitHandler = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    let emailInput = emailRef.current?.value || "";
    let currentErr = isValidEmail(emailInput);

    if(currentErr == ''){
      sendEmail(e.currentTarget);
    }else{
      setFormMsg(currentErr);
      setEmailSuccess(false);

      setTimeout(()=>{
        setFormMsg("");
        setEmailSuccess(false);
      }, 5000)
    }
  }


  return (
     <section className="booking" id="contact-section">
      <FlyBalloon color={"#fff6f5"} size={80} left={"10%"} />
      <FlyBalloon color={"#9CAD6F"} size={60} left={"30%"} />
      <FlyBalloon color={"#E4A894"} size={60} left={"50%"} />
      <FlyBalloon color={"#C288FF"} size={80} left={"70%"} />
      <FlyBalloon color={"#f9b233"} size={80} left={"90%"} />
      <FlyBalloon color={"#E4A894"} size={80} left={"100%"} />

      <h2 className="heading-primary">Контакти</h2>

      <section className="contact contact-section">
        <AnimatedOnScroll delay={300} animation ="fade-right">
          <SocialIcons/>
        </AnimatedOnScroll>
        
        <div className="contact-left">
          <AnimatedOnScroll delay={200}>
            <h1 className="contact-title">Нека направим вашия празник цветен и специален!</h1>
            <p className="contact-subtitle">
              Свържете се с нас през нашите социални мрежи, телефон или ни изпратете имейл през формата и ние ще се свържем с Вас.
            </p>
          </AnimatedOnScroll>
        </div>

        <AnimatedOnScroll delay={200} animation ="fade-right">
          <form onSubmit={submitHandler} className="contact-form">
              <div className={formMsg != '' ? `form-msg ${emailSuccess ? "form-success" : "form-err"}` : "form-msg-hidden"}>
                <p>{formMsg}</p>
              </div>
              <div className="contact-field">
                <label htmlFor="email">Имейл*</label>
                <input ref={emailRef} name="email" type="email" id="email" placeholder="Вашият Имейл (задължително)" required />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Телефон</label>
                <input name="phone" type="tel" id="phone" placeholder="Вашият телефонен номер (незадължително)" />
              </div>

              <div className="contact-field">
                <label htmlFor="description">Допълнителна информация</label>
                <textarea
                  name="message"
                  id="description"
                  rows={4}
                  placeholder="Разкажете ни повече за вашето събитие... (незадължително)"
                  
                ></textarea>
              </div>

              <button type="submit" className="button-primary">
                {sending ? "Изпащане..." : "Изпратете съобщение"}
              </button>
          </form>
        </AnimatedOnScroll>

      </section>
    </section>
  );
};

