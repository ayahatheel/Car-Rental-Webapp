import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import "./CarRentalform.css"; // Reusing the same CSS file for consistency

const EditRentalModal = ({ open, handleClose, rentalData, handleSave }) => {
  const [formValues, setFormValues] = useState(rentalData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSave(formValues);
  };

  return (
    <Dialog open={open} onClose={handleClose} dir="rtl" PaperProps={{ sx: { backgroundColor: '#f5f5f5', color: '#000000', borderRadius: '10px' } }}>
      <DialogTitle sx={{ backgroundColor: '#E90224', color: '#ffffff', textAlign: 'right', fontFamily: 'Tajawal, sans-serif' }}>تعديل معلومات الاستئجار</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="full-name">الاسم الكامل</label>
          <TextField
            margin="dense"
            id="full-name"
            name="fullName"
            type="text"
            fullWidth
            placeholder="أدخل الاسم الكامل"
            value={formValues.fullName}
            onChange={handleInputChange}
            InputLabelProps={{ sx: { fontFamily: 'Tajawal, sans-serif', color: '#000000' } }}
            InputProps={{ sx: { fontFamily: 'Tajawal, sans-serif' } }}
          />
          <p>موقع التسليم</p>
          <FormControl component="fieldset" margin="dense">
            <RadioGroup
              name="delivery"
              value={formValues.delivery}
              onChange={handleInputChange}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel value="airport" control={<Radio sx={{ color: '#E90224', '&.Mui-checked': { color: '#E90224' } }} />} label="توصيل في المطار" />
              <FormControlLabel value="specific-location" control={<Radio sx={{ color: '#E90224', '&.Mui-checked': { color: '#E90224' } }} />} label="توصيل في موقع محدد" />
            </RadioGroup>
          </FormControl>
          {formValues.delivery === 'specific-location' && (
            <>
              <TextField
                margin="dense"
                id="address"
                name="address"
                type="text"
                fullWidth
                placeholder="أدخل العنوان"
                value={formValues.address}
                onChange={handleInputChange}
                InputLabelProps={{ sx: { fontFamily: 'Tajawal, sans-serif', color: '#000000' } }}
                InputProps={{ sx: { fontFamily: 'Tajawal, sans-serif' } }}
              />
              <TextField
                margin="dense"
                id="optional"
                name="optional"
                type="text"
                fullWidth
                placeholder="الشقة، الشارع، الخ (اختياري)"
                value={formValues.optional}
                onChange={handleInputChange}
                InputLabelProps={{ sx: { fontFamily: 'Tajawal, sans-serif', color: '#000000' } }}
                InputProps={{ sx: { fontFamily: 'Tajawal, sans-serif' } }}
              />
            </>
          )}
          <p>الوثائق التي ستسلم</p>
          <FormControl component="fieldset" margin="dense">
            <RadioGroup
              name="documents"
              value={formValues.documents}
              onChange={handleInputChange}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel value="passport" control={<Radio sx={{ color: '#E90224', '&.Mui-checked': { color: '#E90224' } }} />} label="جواز السفر" />
              <FormControlLabel value="personal-id" control={<Radio sx={{ color: '#E90224', '&.Mui-checked': { color: '#E90224' } }} />} label="الهوية الشخصية" />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="dense"
            id="fee"
            name="fee"
            type="number"
            fullWidth
            placeholder="الرسوم (+200 دينار عراقي)"
            value={formValues.fee}
            onChange={handleInputChange}
            InputLabelProps={{ sx: { fontFamily: 'Tajawal, sans-serif', color: '#000000' } }}
            InputProps={{ sx: { fontFamily: 'Tajawal, sans-serif' } }}
          />
          <TextField
            margin="dense"
            id="extra"
            name="extra"
            type="text"
            fullWidth
            placeholder="معلومات إضافية"
            value={formValues.extra}
            onChange={handleInputChange}
            InputLabelProps={{ sx: { fontFamily: 'Tajawal, sans-serif', color: '#000000' } }}
            InputProps={{ sx: { fontFamily: 'Tajawal, sans-serif' } }}
          />
        </form>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-start' }}>
        <Button onClick={handleClose} sx={{ color: '#000000', '&:hover': { color: '#E90224' }, fontFamily: 'Tajawal, sans-serif' }}>
          إلغاء
        </Button>
        <Button onClick={handleFormSubmit} sx={{ backgroundColor: '#E90224', color: '#ffffff', ml: 1, '&:hover': { backgroundColor: 'white', color: '#E90224' }, fontFamily: 'Tajawal, sans-serif' }}>
          حفظ
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditRentalModal;
