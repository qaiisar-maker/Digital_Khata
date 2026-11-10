/* =========================================================
   Digital Khata – Language (Urdu ⇄ English)
   UI is written in Urdu; in English mode every UI text is
   translated live (DOM observer). User data is never changed.
   ========================================================= */
(function () {
  'use strict';
  const D = {
    // navigation / titles
    'ہوم (ڈیش بورڈ)': 'Home (Dashboard)', 'ہوم': 'Home', 'وینڈر مینجمنٹ': 'Vendor Management', 'نیا بل شامل کریں': 'Add New Bill',
    'وینڈر بلز': 'Vendor Bills', 'وینڈر پیمنٹس': 'Vendor Payments', 'ڈیجیٹل کھاتہ': 'Digital Khata', 'رپورٹس': 'Reports',
    'ڈیٹا امپورٹ / ایکسپورٹ': 'Data Import / Export', 'پاس ورڈ سیٹنگ': 'Password Settings', 'آف لائن موڈ': 'Offline Mode',
    'بلز': 'Bills', 'پیمنٹس': 'Payments', 'کھاتہ': 'Khata', 'وینڈر تلاش کریں…': 'Search vendor…', 'وینڈر تلاش کریں': 'Search Vendor',
    // dashboard
    'کل وینڈرز': 'Total Vendors', 'کل بلز': 'Total Bills', 'کل پیمنٹس': 'Total Payments', 'بقایا رقم': 'Remaining Balance',
    'نیا وینڈر شامل کریں': 'Add New Vendor', 'پیمنٹ درج کریں': 'Enter Payment', 'ڈیجیٹل کھاتہ دیکھیں': 'View Digital Khata',
    'حالیہ ٹرانزیکشنز': 'Recent Transactions', 'تازہ ترین بلز اور پیمنٹس': 'Latest bills & payments', 'فوری رپورٹس': 'Quick Reports',
    'وینڈر بل کی تفصیل': 'Vendor Bill Detail', 'وینڈر پیمنٹ کی تفصیل': 'Vendor Payment Detail', 'وینڈر کا ڈیجیٹل کھاتہ': 'Vendor Digital Khata',
    'تاریخ': 'Date', 'وینڈر کا نام': 'Vendor Name', 'بل نمبر': 'Bill No', 'بل رقم (Rs)': 'Bill (Rs)', 'پیمنٹ (Rs)': 'Payment (Rs)',
    'بقایا (Rs)': 'Balance (Rs)', 'تفصیل': 'Details', 'بل': 'Bill', 'پیمنٹ': 'Payment', 'چیک تبدیلی': 'Cheque Replacement',
    'ابھی کوئی ٹرانزیکشن نہیں۔ شروع کرنے کے لیے پہلے وینڈر شامل کریں۔': 'No transactions yet. Add a vendor to get started.',
    'پاس ورڈ': 'Password', 'سیکیورٹی': 'Security', 'ڈیٹا امپورٹ': 'Data Import', 'اور ایکسپورٹ': '& Export', 'ایڈٹ / ڈیلیٹ': 'Edit / Delete',
    'تمام ریکارڈز': 'All Records', 'آف لائن کام کرتا ہے': 'Works Offline', 'دونوں کے لیے': 'Both Supported',
    // vendors
    'وینڈر میں ترمیم کریں': 'Edit Vendor', 'موبائل نمبر': 'Mobile Number', 'شہر': 'City', 'مثلاً: احمد ٹریڈرز': 'e.g. Ahmad Traders',
    'مثلاً: علی پور چٹھہ': 'e.g. Ali Pur Chattha', 'تبدیلیاں محفوظ کریں': 'Save Changes', 'وینڈر محفوظ کریں': 'Save Vendor', 'منسوخ': 'Cancel',
    'وینڈر ٹیبل': 'Vendor Table', 'تلاش کریں: نام، موبائل یا شہر…': 'Search: name, mobile or city…', 'موبائل': 'Mobile',
    'کل بل رقم': 'Total Bill Amount', 'کل ادائیگی': 'Total Paid', 'بقایا': 'Balance', 'ایکشن': 'Actions', 'کوئی میچ نہیں ملا': 'No match found',
    'ابھی کوئی وینڈر نہیں — اوپر فارم سے پہلا وینڈر شامل کریں': 'No vendors yet — add your first vendor using the form above',
    'ترمیم موڈ: نام تبدیل کرنے سے تمام بلز، پیمنٹس اور رپورٹس میں خود بخود اپڈیٹ ہو جائے گا۔': 'Edit mode: changing the name updates all bills, payments and reports automatically.',
    'وینڈر کا نام لازمی ہے': 'Vendor name is required', 'یہ وینڈر پہلے سے موجود ہے — ہر وینڈر کا ریکارڈ منفرد ہونا چاہیے': 'This vendor already exists — every vendor must be unique',
    'وینڈر اپڈیٹ ہو گیا ✓': 'Vendor updated ✓', 'وینڈر محفوظ ہو گیا ✓': 'Vendor saved ✓', 'وینڈر حذف ہو گیا': 'Vendor deleted',
    // bills
    'بل میں ترمیم': 'Edit Bill', 'تمام بلز': 'All Bills', 'بل کی تاریخ': 'Bill Date', 'بل کی تصویر': 'Bill Image', 'تصویر منتخب کریں': 'Choose Image',
    'آئٹم کی تفصیل': 'Item Description', 'مثلاً: سریا، سیمنٹ، گھی…': 'e.g. steel, cement, ghee…', 'مقدار': 'Quantity', 'ریٹ': 'Rate', 'رقم (Rs)': 'Amount (Rs)',
    'مقدار × ریٹ درج کریں تو رقم خود بنے گی، ورنہ رقم خود لکھیں': 'Enter Quantity × Rate to auto-calculate, or type the amount manually',
    'بل محفوظ کریں (Save Bill)': 'Save Bill', 'فارم صاف کریں': 'Clear Form', 'وینڈر کے بلز': 'Vendor Bills', 'کوئی تصویر منسلک نہیں': 'No image attached', 'ہٹائیں': 'Remove',
    'ترمیم موڈ — محفوظ کرنے پر کھاتہ، بقایا اور رپورٹس خود بخود اپڈیٹ ہو جائیں گی۔': 'Edit mode — saving updates the Khata, balance and reports automatically.',
    'وینڈر منتخب کریں — موجودہ وینڈر ٹیبل سے': 'Select a vendor from the vendor table', 'بل نمبر لازمی ہے': 'Bill number is required', 'بل کی رقم درج کریں': 'Enter the bill amount',
    'بل محفوظ ہو گیا ✓ کھاتہ اپڈیٹ': 'Bill saved ✓ Khata updated', 'بل اپڈیٹ ہو گیا ✓ کھاتہ اپڈیٹ': 'Bill updated ✓ Khata updated', 'تصویر لوڈ نہیں ہو سکی': 'Image could not be loaded',
    'بل نمبر / تفصیل': 'Bill No / Item', 'تلاش…': 'Search…', 'تمام وینڈرز — نام لکھ کر منتخب کریں': 'All vendors — type a name to filter', 'تصویر': 'Image',
    'کوئی بل موجود نہیں — No bills': 'No bills', 'کل بل رقم — Total': 'Total Bill Amount', 'بل کی تفصیل — Bill Detail': 'Bill Detail', 'وینڈر': 'Vendor',
    'اصل بل کی تصویر (کلک کریں)': 'Original bill image (click to open)', 'بل بطور Image': 'Bill as Image', 'بل بطور PDF': 'Bill as PDF', 'ترمیم': 'Edit', 'حذف': 'Delete',
    'اصل تصویر ڈاؤن لوڈ کریں': 'Download Original Image', 'بل حذف ہو گیا — کھاتہ اپڈیٹ': 'Bill deleted — Khata updated', 'تصویر نہیں ملی': 'Image not found',
    'رقم': 'Amount', 'وینڈر بل': 'Vendor Bill', 'معلومات': 'Details', 'بل کی کل رقم': 'Bill Amount',
    // payments
    'پیمنٹ میں ترمیم': 'Edit Payment', 'نئی پیمنٹ درج کریں': 'New Payment Entry', 'پیمنٹ کی تاریخ': 'Payment Date', 'پیمنٹ کی رقم (Rs)': 'Payment Amount (Rs)',
    'طریقہ ادائیگی': 'Payment Method', 'نقد': 'Cash', 'چیک': 'Cheque', 'آن لائن': 'Online', 'چیک کی تفصیل — Cheque Details': 'Cheque Details', 'چیک نمبر': 'Cheque No',
    'چیک پر درج تاریخ': 'Cheque Given Date', 'چیک کلیئر ہونے کی تاریخ': 'Cheque Clear Date', 'چیک اسٹیٹس': 'Cheque Status', 'کلیئر': 'Cleared', 'زیرِ التوا': 'Pending',
    'باؤنس': 'Bounced', 'تبدیل شدہ': 'Replaced', 'ادا شدہ': 'Paid', 'نوٹ / حوالہ': 'Note / Reference', 'مثلاً: بینک ٹرانزیکشن آئی ڈی، وصول کنندہ…': 'e.g. bank transaction ID, receiver…',
    'اگر چیک اسی تاریخ کو کلیئر ہوا جو چیک پر درج ہے تو کلیئر تاریخ خالی چھوڑ دیں۔ "زیرِ التوا" اور "باؤنس" چیک کھاتے میں ادائیگی شمار نہیں ہوتے۔': 'If the cheque cleared on the date written on it, leave Clear Date empty. Pending and Bounced cheques are not counted as payment in the Khata.',
    'پیمنٹ محفوظ کریں (Save Payment)': 'Save Payment', 'پیمنٹ ٹیبل': 'Payment Table', 'پیمنٹ ٹیبل (تمام وینڈرز)': 'Payment Table (all vendors)',
    'ترمیم موڈ — محفوظ کرنے پر وینڈر کی پیمنٹ ہسٹری اور بقایا خود اپڈیٹ ہوں گے۔': 'Edit mode — saving updates the vendor payment history and balance automatically.',
    'وینڈر منتخب کریں': 'Select a vendor', 'پیمنٹ کی رقم درج کریں': 'Enter the payment amount', 'چیک نمبر درج کریں': 'Enter the cheque number',
    'پیمنٹ اپڈیٹ ہو گئی ✓': 'Payment updated ✓', 'پیمنٹ محفوظ ہو گئی ✓ کھاتہ اپڈیٹ': 'Payment saved ✓ Khata updated', 'پیمنٹ حذف ہو گئی — کھاتہ اپڈیٹ': 'Payment deleted — Khata updated',
    'کوئی پیمنٹ موجود نہیں — No payments': 'No payments', 'طریقہ': 'Method', 'چیک کی تاریخ': 'Cheque Date', 'کلیئر تاریخ': 'Clear Date', 'اسٹیٹس': 'Status',
    'کل ادا شدہ رقم — Total Paid (cleared only)': 'Total Paid (cleared only)', 'چیک ریکارڈز': 'Cheque Records', 'چیک تبدیلی (Replace)': 'Cheque Replace',
    'تمام': 'All', 'پیمنٹ تاریخ': 'Payment Date', 'تبدیلی کی تفصیل': 'Replacement', 'کوئی چیک ریکارڈ نہیں': 'No cheque records', 'چیک تاریخ': 'Cheque Date', 'چیک تاریخ:': 'Cheque date:',
    'چیک تبدیلی میں ترمیم': 'Edit Cheque Replacement', 'چیک تبدیلی / متبادل ادائیگی': 'Cheque Replacement / Replacement Payment', 'اصل چیک نمبر': 'Original Cheque No',
    'جب کوئی چیک کلیئر نہ ہو اور وینڈر نقد یا آن لائن ادائیگی مانگے تو یہاں درج کریں۔ اصل چیک کھاتے سے ہٹ جائے گا اور صرف متبادل رقم بطور ادائیگی شمار ہوگی۔': 'Use this when a cheque cannot be cleared and the vendor asks for Cash or Online payment instead. The original cheque is removed from the Khata and only the replacement amount counts as payment.',
    'متبادل ادائیگی کی تاریخ': 'Replacement Payment Date', 'متبادل طریقہ': 'Replacement Method', 'اکاؤنٹ ٹائٹل': 'Account Title', 'اکاؤنٹ کی معلومات': 'Account Information',
    'نقد وصول کرنے والے کا نام': 'Cash Received By', 'متبادل رقم (Rs)': 'Replacement Amount (Rs)', 'محفوظ کریں (Save)': 'Save', 'چیک تبدیلی ہسٹری': 'Cheque Replacement History',
    'اصل چیک نمبر لکھیں… مثلاً 203344': 'Type original cheque no… e.g. 203344', 'چیک رقم': 'Cheque Amt', 'اکاؤنٹ / وصول کنندہ': 'Account / Person', 'متبادل رقم': 'Replacement Amount',
    'ابھی کوئی چیک تبدیلی ریکارڈ نہیں': 'No cheque replacements yet', 'اصل چیک منتخب کریں': 'Select the original cheque', 'متبادل رقم درج کریں': 'Enter the replacement amount',
    'چیک تبدیلی محفوظ ✓ کھاتہ اپڈیٹ': 'Cheque replacement saved ✓ Khata updated', 'چیک کلیئر مارک کریں': 'Mark Cheque Cleared', 'کلیئر ہونے کی تاریخ': 'Clear Date',
    'کلیئر محفوظ کریں': 'Save as Cleared', 'چیک کلیئر ✓ کھاتہ اپڈیٹ': 'Cheque cleared ✓ Khata updated', 'کلیئر مارک کریں': 'Mark cleared', 'ریکارڈ حذف ہو گیا': 'Record deleted',
    'متبادل ادائیگی': 'Replacement Details', 'متبادل': 'Replacement', 'غیر شمار شدہ چیک *': 'Not counted cheques *',
    // khata
    'وینڈر کا نام تلاش کریں': 'Vendor Name Search', 'کل بقایا': 'Remaining Balance', 'کھاتہ بطور Image': 'Khata as Image', 'کھاتہ بطور PDF': 'Khata as PDF',
    'نیا بل': 'New Bill', 'نئی پیمنٹ': 'New Payment', 'پیمنٹ رقم': 'Payment Amount', 'بل رقم': 'Bill Amount', 'کل — Total': 'Total', 'بقایا — Remaining': 'Remaining',
    'شمار نہیں': 'not counted', '(شمار نہیں)': '(not counted)', 'اس وینڈر کا ابھی کوئی ریکارڈ نہیں': 'No records for this vendor yet',
    'وینڈر کا نام لکھ کر منتخب کریں — مکمل کھاتہ خود بخود ظاہر ہوگا': 'Type and select a vendor name — the full account appears automatically',
    'سابقہ بقایا  Opening Balance': 'Opening Balance', 'کی جگہ': 'replaced by',
    // reports
    'تاریخ سے': 'From Date', 'تاریخ تک': 'To Date', 'رپورٹ دیکھنے کے لیے وینڈر منتخب کریں': 'Select a vendor to view the report', 'کوئی ریکارڈ نہیں': 'No records',
    '* زیرِ التوا، باؤنس یا تبدیل شدہ چیک کل ادائیگی میں شمار نہیں ہوتے۔ متبادل ادائیگی الگ لائن میں شمار ہوتی ہے۔': '* Pending, bounced or replaced cheques are not counted in total payments. Replacement payments are counted on their own line.',
    'پہلے وینڈر منتخب کریں': 'Select a vendor first', 'PDF تیار ہو رہی ہے…': 'Preparing PDF…', 'HD Image تیار ہو رہی ہے…': 'Preparing HD image…', 'Image تیار ہو رہی ہے…': 'Preparing image…',
    // data
    'وینڈرز': 'Vendors', 'چیک تبدیلیاں': 'Cheque Replacements', 'ڈیٹا ایکسپورٹ (بیک اپ)': 'Data Export (Backup)', 'ڈیٹا امپورٹ (بحالی)': 'Data Import (Restore)',
    'تمام وینڈرز، بلز، بل کی تصاویر، پیمنٹس، چیک ریکارڈز، چیک تبدیلیاں اور ڈیجیٹل کھاتہ ایک فائل میں محفوظ ہوں گے۔': 'All vendors, bills, bill images, payments, cheque records, cheque replacements and Digital Khata are saved in one file.',
    'مکمل بیک اپ ڈاؤن لوڈ کریں': 'Download Full Backup', 'مشورہ: ہر ہفتے بیک اپ لیں اور Google Drive یا USB میں محفوظ رکھیں۔': 'Tip: take a backup every week and keep it on Google Drive or USB.',
    'بیک اپ فائل منتخب کریں': 'Choose Backup File', 'توجہ: امپورٹ کرنے سے اس ڈیوائس کا موجودہ ڈیٹا بیک اپ والے ڈیٹا سے تبدیل ہو جائے گا۔': 'Warning: importing replaces the current data on this device with the backup data.',
    'ایپ انسٹال اور آف لائن': 'Install App & Offline', 'ایپ انسٹال کریں (Install App)': 'Install App', 'بیک اپ تیار ہو رہا ہے…': 'Preparing backup…', 'بیک اپ ڈاؤن لوڈ ہو گیا ✓': 'Backup downloaded ✓',
    'فائل درست نہیں (JSON پڑھی نہیں جا سکی)': 'Invalid file (JSON could not be read)', 'یہ Digital Khata کی بیک اپ فائل نہیں ہے': 'This is not a Digital Khata backup file',
    'ہاں، امپورٹ کریں': 'Yes, Import', 'ڈیٹا بحال ہو رہا ہے…': 'Restoring data…', 'ڈیٹا کامیابی سے امپورٹ ہو گیا ✓': 'Data imported successfully ✓',
    'مستقل اسٹوریج: فعال ✓': 'Persistent storage: enabled ✓', 'مستقل اسٹوریج: براؤزر کی اجازت درکار': 'Persistent storage: browser permission needed', 'استعمال شدہ اسٹوریج:': 'Storage used:',
    // password / lock
    'پاس ورڈ تبدیل کریں': 'Change Password', 'ایپ پاس ورڈ سیٹ کریں': 'Set App Password', 'موجودہ پاس ورڈ': 'Current Password', 'نیا پاس ورڈ': 'New Password',
    'نیا پاس ورڈ دوبارہ': 'Confirm New Password', 'یاد دہانی اشارہ': 'Password Hint', 'مثلاً: دکان کا پرانا نمبر': 'e.g. old shop number', 'پاس ورڈ سیٹ کریں': 'Set Password',
    'پاس ورڈ ختم کریں': 'Remove Password', 'ابھی لاک کریں': 'Lock Now', 'پاس ورڈ فعال ہے ✓ — ایپ کھولنے پر پاس ورڈ مانگا جاتا ہے۔': 'Password is active ✓ — it is asked every time the app opens.',
    'ابھی کوئی پاس ورڈ نہیں۔ پاس ورڈ سیٹ کرنے کے بعد ایپ کھولنے پر پاس ورڈ اسکرین آئے گی۔': 'No password yet. After setting one, a password screen appears when the app opens.',
    'موجودہ پاس ورڈ غلط ہے': 'Current password is wrong', 'پاس ورڈ کم از کم 4 حروف کا ہو': 'Password must be at least 4 characters', 'دونوں پاس ورڈ ایک جیسے نہیں': 'Passwords do not match',
    'پاس ورڈ تبدیل ہو گیا ✓': 'Password changed ✓', 'پاس ورڈ سیٹ ہو گیا ✓': 'Password set ✓', 'پہلے موجودہ پاس ورڈ درج کریں': 'Enter the current password first',
    'پاس ورڈ ختم کر دیں؟ ایپ بغیر پاس ورڈ کے کھلے گی۔': 'Remove the password? The app will open without a password.', 'پاس ورڈ ختم ہو گیا': 'Password removed',
    'خوش آمدید! ایپ کی حفاظت کے لیے پاس ورڈ سیٹ کریں': 'Welcome! Set a password to protect the app', 'دوبارہ لکھیں': 'Confirm', 'اشارہ': 'Hint', 'ابھی نہیں': 'Not now',
    'ایپ کھولنے کے لیے پاس ورڈ درج کریں': 'Enter password to open the app', 'ایپ کھولیں — Unlock': 'Unlock', 'پاس ورڈ بھول گئے؟': 'Forgot password?',
    'غلط پاس ورڈ — دوبارہ کوشش کریں': 'Wrong password — try again', 'کوئی اشارہ محفوظ نہیں کیا گیا': 'No hint was saved', 'اشارہ:': 'Hint:',
    // common / dialogs
    'تصدیق کریں': 'Please Confirm', 'ہاں، حذف کریں': 'Yes, Delete', 'ہاں، محفوظ کریں': 'Yes, Save', 'کوئی ریکارڈ نہیں ملا': 'No records found',
    'وینڈر کا نام لکھیں… (Type vendor name)': 'Type vendor name…', 'خودکار:': 'Auto:', 'بلز:': 'Bills:', 'بقایا:': 'Balance:', 'رقم:': 'Amount:', 'صفحات': 'pages', 'صفحہ': 'page',
    'ڈاؤن لوڈ ہو گئی ✓': 'downloaded ✓', 'ڈاؤن لوڈ': 'downloaded', 'پیمنٹ ہسٹری': 'Payment History', 'بل ریکارڈ': 'Bill Records', 'اور': 'and',
    // Google Drive
    'گوگل ڈرائیو آٹو بیک اپ': 'Google Drive Auto Backup', 'ڈرائیو سے کنیکٹ کریں': 'Connect Google Drive', 'ابھی بیک اپ لیں': 'Backup Now', 'ڈرائیو سے بحال کریں': 'Restore from Drive',
    'ڈسکنیکٹ': 'Disconnect', 'آٹو بیک اپ': 'Auto Backup', 'ہر تبدیلی کے بعد خود بخود بیک اپ': 'Back up automatically after every change', 'آخری بیک اپ:': 'Last backup:',
    'ابھی تک کوئی بیک اپ نہیں': 'No backup yet', 'کنیکٹ شدہ': 'Connected', 'کنیکٹ نہیں': 'Not connected', 'Client ID محفوظ کریں': 'Save Client ID',
    'پہلے Client ID درج کریں': 'Enter the Client ID first', 'ڈرائیو کنیکٹ ہو گئی ✓': 'Google Drive connected ✓', 'ڈرائیو پر بیک اپ ہو گیا ✓': 'Backed up to Google Drive ✓',
    'ڈرائیو بیک اپ ناکام': 'Drive backup failed', 'انٹرنیٹ نہیں — بیک اپ بعد میں ہوگا': 'No internet — backup will run later', 'ڈرائیو پر بیک اپ ہو رہا ہے…': 'Backing up to Google Drive…',
    'ڈرائیو بیک اپ فائلیں': 'Drive Backup Files', 'بحال کریں': 'Restore', 'کوئی بیک اپ فائل نہیں ملی': 'No backup files found', 'لوڈ ہو رہا ہے…': 'Loading…',
    'بیک اپ زیرِ التوا — ٹیپ کر کے سنک کریں': 'Backup pending — tap to sync', 'زیرِ التوا تبدیلیاں': 'Pending changes', 'ڈرائیو کنیکٹ نہیں ہو سکی': 'Could not connect Google Drive',
    'فائلیں "Digital Khata Backup" فولڈر میں محفوظ ہوتی ہیں: ایک تازہ ترین فائل + روزانہ کاپی (آخری 10)۔': 'Files are saved in the "Digital Khata Backup" folder: one latest file + a daily copy (last 10 kept).',
    'Client ID بنانے کا طریقہ Testing / README فائل میں دیا گیا ہے۔': 'How to create the Client ID is explained in the Testing / README file.',
    'آن لائن اکاؤنٹ کی تفصیل — Online Account Details': 'Online Account Details', 'اکاؤنٹ / متبادل تفصیل': 'Account / Replacement Details',
    'ڈرائیو سے ڈیٹا بحال ہو رہا ہے…': 'Restoring from Google Drive…', 'زبان': 'Language'
  };
  // Longest-first fragment list for mixed strings (e.g. "چیک #203344 (کلیئر)")
  const KEYS = Object.keys(D).sort((a, b) => b.length - a.length);
  const UR = /[؀-ۿ]/;
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const FRAG = KEYS.map(k => [new RegExp('(?<![\\u0600-\\u06FF])' + esc(k) + '(?![\\u0600-\\u06FF])', 'g'), D[k]]);

  function tr(s) {
    if (s == null) return s;
    s = String(s);
    if (!UR.test(s)) return s;
    const t = s.trim();
    if (D[t]) return s.replace(t, D[t]);
    let out = s;
    for (const [re, en] of FRAG) { if (!UR.test(out)) break; out = out.replace(re, en); }
    return out.replace(/۔/g, '.').replace(/،/g, ',').replace(/؟/g, '?');
  }

  let lang = 'ur';
  try { lang = localStorage.getItem('dk_lang') || 'ur'; } catch (e) { }
  const isEn = () => lang === 'en';
  const skip = n => { const el = n.nodeType === 1 ? n : n.parentElement; return !el || el.closest('[translate="no"],script,style,textarea'); };

  function walk(root) {
    if (!isEn() || !root) return;
    if (root.nodeType === 3) { if (!skip(root) && UR.test(root.nodeValue)) { const v = tr(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; } return; }
    if (root.nodeType !== 1 || skip(root)) return;
    const els = [root, ...root.querySelectorAll('[placeholder],[title],[aria-label]')];
    els.forEach(el => ['placeholder', 'title', 'aria-label'].forEach(a => { const v = el.getAttribute && el.getAttribute(a); if (v && UR.test(v) && !skip(el)) { const t = tr(v); if (t !== v) el.setAttribute(a, t); } }));
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const list = []; while (it.nextNode()) list.push(it.currentNode);
    list.forEach(n => { if (UR.test(n.nodeValue) && !skip(n)) { const v = tr(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; } });
  }
  const obs = new MutationObserver(ms => {
    if (!isEn()) return;
    ms.forEach(m => {
      if (m.type === 'characterData') walk(m.target);
      else if (m.type === 'attributes') walk(m.target);
      else m.addedNodes.forEach(walk);
    });
  });

  function applyDir() {
    const h = document.documentElement;
    h.lang = isEn() ? 'en' : 'ur'; h.dir = isEn() ? 'ltr' : 'rtl';
    h.classList.toggle('lang-en', isEn());
  }
  function start() {
    applyDir();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title'] });
    walk(document.body);
  }
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'ur';
    try { localStorage.setItem('dk_lang', lang); } catch (e) { }
    // full reload so every screen is rebuilt cleanly in the new language
    location.reload();
  }
  window.I18N = { tr, isEn, setLang, start, get lang() { return lang; } };
  applyDir();
})();
