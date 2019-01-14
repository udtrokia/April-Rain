/*
 *
 **/
//#home.js
import { router } from '.';
import { card_model_a, card_model_b, card_model_c, navigator } from './components';
import { DOM, Element } from '../lib';
import { model_b, model_c, model_d, model_e, model_f } from './card';
import '../styles/detail.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* Functions */
function last_block(element) {
  let model_f_wrapper = e.i('div', {'class': 'msg_wrapper_f'}).t(element);
  model_f(model_f_wrapper,
    'icon_3_1', 'Received 1st payment', '$10 will received more upcoming weeks');
  e.i('div', {'class': 'br_black'}).t(model_f_wrapper);
  model_f(model_f_wrapper, 'icon_3_2', 'Discount coupon received', 'clicked to see detail');
  e.i('div', {'class': 'column_space'}).p('').t(element);
  element.element.scrollTo({top: 1000, behavior: 'smooth'});
}

function slide_area(element) {
  let wrapper = e.i('div', {
    'class': 'slide_area_detail', 'id': 'slide_area_detail'
  }).t(element);
  model_e(wrapper, 'icon_1_5', 'Privacy', 'protection',
    () => card_model_c(page_detail),
    () => {
      model_e(wrapper,
        'icon_1_5', 'verify & auditing', '& signed',
        () => card_model_c(element),
        () => last_block(element),
        true
      );
    }
  );
}

/* Init */
export default function detail(data) {
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@navigator
  navigator('panel', data.noti);

  //@structure
  let page_detail = e.i('section', {'class': 'page page_detail'}).t(d.id('tachion'));
  let safe_detail = e.i('div', {'class': 'safe safe_detail'}).t(page_detail);

  //@card_a
  let card_a_wrapper = e.i('div', {
    'class': 'card_a_wrapper card_a_wrapper_bg'
  }, {'touchend': () => {}}).t(safe_detail);
  model_b(card_a_wrapper, `detail_${data.tapp}`, data.noti, data.subp,
    () => card_model_a(page_detail)
  );
  e.i('div', {'class': 'br'}).t(card_a_wrapper);
  model_c(card_a_wrapper, 'icon_1_2', data.card_a[0]);
  model_c(card_a_wrapper, 'icon_1_3', data.card_a[1]);

  model_d(safe_detail, `card_b_${data.tapp}`,
    data.card_b[0],
    data.card_b[1],
    data.card_b[2],
    () => slide_area(safe_detail),
    () => card_model_b(page_detail)
  );
}
