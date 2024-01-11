import emailjs from '@emailjs/browser'; 

export default function SendEMail(datas,theStatus) {
    const {name,subj,email,message } = datas 
    const templateParams = {
        name: name,
        subj: subj,
        email: email,
        message: message
    };  
    emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
	.then((response) => {theStatus('success')}, (err) => {theStatus('failed')});
}