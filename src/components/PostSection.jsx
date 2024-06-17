import React, { useEffect, useState } from 'react';
import RadioButton from './RadioButton';
import Input from './Input';
import UploadImg from './UploadImg';
import Button from './Button';
import FormSuccess from './FormSucces';
import Preloader from './Preloader';

function PostSection({ reload, setReload }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [option, setOption] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [token, setToken] = useState('');
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    position: false,
    file: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    photo: null,
    position: ''
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const positionChange = (e) => {
    setPosition(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      position: e.target.value,
    }));
  };

  const handleFileChange = (file) => {
    setFile(file);
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: file
    }));
  };

  const validateForm = () => {
    let errors = {
      name: !name,
      email: !email,
      phone: !phone,
      position: !position,
      file: !file
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('position_id', position);
    data.append('photo', file);

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      headers: {
        'Token': token
      },
      body: data
    }).then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    }).then((res) => {
      setLoading(false);
      if (res.success) {
        setSuccess(true);
        setReload(!reload);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }).catch((e) => {
      setError(e.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setToken(data.token);
      })
      .catch((error) => {
        setError(error.message);
      });

    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!position && data.positions.length > 0) {
          setPosition(data.positions[0].id);
        }
        setOption(data.positions);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    setIsFormValid(name && email && phone && position && file);
  }, [name, email, phone, position, file]);

  return (
    <div className='post'>
      <div className="post__container container">
        <p className="post__title">Working with POST request</p>
        <form className='post__form' onSubmit={submitForm}>
          <div className='post__form-rows'>
            <Input
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              required
              error={formErrors.name}
            />
          </div>
          <div className='post__form-rows'>
            <Input
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              error={formErrors.email}
            />
          </div>
          <div className='post__form-rows'>
            <Input
              label='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={13}
              type='tel'
              required
              error={formErrors.phone}
            />
            <label className='post__form-label'>+38 (XXX) XXX - XX - XX</label>
          </div>
          <div className="post__position">
            <p>Select your position</p>
            <div>
              {option && option.map((item) => (
                <RadioButton
                  key={item.id}
                  name={item.name}
                  value={item.id}
                  checked={position === item.id}
                  onChange={(e) => setPosition(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="post__loader">
            <UploadImg onChange={handleFileChange} required />
          </div>
          <Button disabled={!isFormValid} type='submit'>Sign up</Button>
        </form>
        {!success && loading && <Preloader />}
        {error && <p style={{textAlign: 'center', margin: '15px 0', fontSize: 20}}>Unexpected error. Please check your information and try again later</p>}
        {success && <FormSuccess />}
      </div>
    </div>
  );
}

export default PostSection;
