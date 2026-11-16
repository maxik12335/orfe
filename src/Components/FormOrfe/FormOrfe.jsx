import Input from '../UI/Input/Input';
import Btn from '../UI/Btn/Btn';
import Thanks from '../UI/Thanks/Thanks';
import Textarea from '../UI/Textarea/Textarea';
import classes from './FormOrfe.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatPhone, formatName, validateContacts, formatEmail, FORM_TEXTS } from '../../utils/form';


const FormOrfe = ({ onSubmit, close }) => {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'ru';
  const t = FORM_TEXTS[lang];

  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const errors = validateContacts(values, lang);
  const isValid = !errors.name && !errors.email && !errors.phone
    && values.name !== '' && values.email !== '';
const handleChange = (field, formatter = (v) => v) => (e) => {
  setValues((prev) => ({ ...prev, [field]: formatter(e.target.value) }));
};

    const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    await onSubmit({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.replace(/\D/g, ''),
      message: values.message.trim(),
    });

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false)
      setValues({ name: '', email: '', phone: '', message: '' })
      close?.()
    }, 2500);
  };

  if (isSent) {
    return (
      <Thanks
        title={t.thanks.title}
        body={t.thanks.body}
      />
    );
  }

  return (
    <div>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Input
          value={values.name}
          onChange={handleChange('name', formatName)}
          error={values.name ? errors.name : ''}
          placeholder={t.name}
          inputMode="text"
        />
        <Input
          value={values.email}
          onChange={handleChange('email', formatEmail)}
          error={values.email ? errors.email : ''}
          placeholder={t.email}
          type="email"
          inputMode="email"
        />
        <Input
          value={values.phone}
          onChange={handleChange('phone', formatPhone)}
          error={values.phone ? errors.phone : ''}
          placeholder={t.phone}
          type="tel"
          inputMode="tel"
        />
        <Textarea
          value={values.message}
          onChange={handleChange('message')}
          error={values.message ? errors.message : ''}
          placeholder={t.message}
          rows={4}
        />
        <Btn isColor={'dark'} disabled={!isValid} type="submit">
          {t.submit}
        </Btn>
      </form>
    </div>
  );
};

export default FormOrfe;
