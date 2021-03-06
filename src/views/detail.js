
/*
 *
 **/
//#home.js
import { router } from '.';
import {
  card_model_a,
  card_model_b,
  card_model_c,
  card_model_d,
  card_model_e,
  card_model_f,
  card_model_g,
  card_model_h,
  navigator,
  active_dot
} from './components';
import { DOM, Element } from '../lib';
import { model_b, model_c, model_d, model_e, model_f } from './card';
import '../styles/detail.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* Functions */
function multi_tapps (arr, tapp) {
    for (let i in arr) {
      if (tapp == arr[i]) return true;
    }
}

function last_block(element, data) {
  setTimeout(() => {
    let model_f_wrapper = e.i('div', {'class': 'msg_wrapper_f'}).t(element);
    model_f(model_f_wrapper, `card_d_${data.tapp}`, data.card_d[0]);
    if(data.card_d[1]){
      e.i('div', {'class': 'br_black'}).t(model_f_wrapper);
      model_f(model_f_wrapper, `card_d_${data.tapp}_b`, data.card_d[1]);
    }
  }, 500)
  // e.i('div', {'class': 'column_space'}).p('').t(element);
  // element.element.scrollTo({top: 1000, behavior: 'smooth'});
}

function slide_area(element, data) {  
  let page = d.id('tachion');
  let wrapper = e.i('div', {
    'class': 'slide_area_detail scroll_x', 'id': 'slide_area_detail'
  }).t(element);
  model_e(wrapper, 'icon_1_5', data.card_c[0], data.card_c[1],
    () => {
      if (data.tapp == 'space') {        
        card_model_c(page, data, 'a');
      } else if (data.tapp == 'social') {
        card_model_e(page, data, 'a');
      }
    }, () => {
      model_e(wrapper, 'icon_1_5', data.card_c[2], data.card_c[3],
        () => {
          if (data.tapp == 'space') {
            card_model_c(page, data, 'b');
          } else if (data.tapp == 'social') {
            card_model_f(page, data, 'a');
          }
        },
        () => {
          if (data.card_c[4]) {            
            model_e(wrapper, 'icon_1_5', data.card_c[4], data.card_c[5],
              () => {
                if (data.tapp == 'space'){
                  card_model_c(page, data, 'a');
                } else if (data.tapp == 'social') {
                  card_model_g(page, data, 'a');
                }
              }, ()=> {
                last_block(element, data)
              },
             true)
          } else {
            last_block(element, data)
          }
        }, true
      );
    }
  );
}

/* Init */
export default function detail(data) {
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@navigator
  navigator('panel', '');

  //@structure
  let page_detail = e.i('section', {'class': 'page page_detail'}).t(d.id('tachion'));
  let safe_detail = e.i('div', {'class': 'safe scroll_y'}).t(page_detail);

  //@@@@@CARD_B@@@@@@
  let card_a_wrapper = e.i('div', {
    'class': 'card_a_wrapper card_a_wrapper_bg'
  }, {'touchend': () => {}}).t(safe_detail);

  data.noti_b?data.noti = data.noti_b:"";

  model_b(card_a_wrapper, `detail_${data.tapp}`, data.noti, "",
    () => card_model_a(page_detail, data),
    data.tapp);

  e.i('div', {'class': 'br'}).t(card_a_wrapper);
  
  model_c(card_a_wrapper, `card_a_${data.tapp}`, data.card_a[0], data.card_a[1]);
  model_c(card_a_wrapper, `card_a_${data.tapp}_b`, data.card_a[2], data.card_a[3]);

  //@@@@@CARD_B@@@@@@
  let slide_model_d = e.i('div', {
    'class': 'slide_model_d',
    'id': 'slide_model_d'
  }).t(safe_detail);  
  
  model_d(slide_model_d, `card_b_${data.tapp}`,
    data.card_b[0],
    data.card_b[1],
    data.card_b[2],
    () => slide_area(safe_detail, data),
    () => {
      if (data.tapp == 'space') {
        card_model_b(page_detail, data, 'a');
      } else if (data.tapp == 'social') {
        card_model_d(page_detail, data, 'a');
      } else if (data.tapp == 'store') {
        card_model_h(page_detail, data, 'a');
      }
    },
    data.card_b[3]?true:undefined,
    'a'
  );
  
  if (data.card_b[3]) {
    model_d(slide_model_d, `card_b_${data.tapp}_b`,
      data.card_b[3],
      data.card_b[4],
      data.card_b[5],
      () => slide_area(safe_detail, data),
      () => {
        if (data.tapp == 'space') {
          card_model_b(page_detail, data, 'b');
        } else if (data.tapp == 'social') {
          card_model_d(page_detail, data, 'b');
        }
      },
      true,
      'b'
    );
  }  

  if (multi_tapps(['space', 'social', 'store'], data.tapp)) {
    active_dot(d.id(`slide_controller_card_b_${data.tapp}`), 'card_a_dot');
    try {
      active_dot(d.id(`slide_controller_card_b_${data.tapp}_b`), 'card_b_dot');
    } catch(err) {
      '';
    }
  }
  
  if (multi_tapps(['space', 'social'], data.tapp)) {
    let dots = e.i('div', {'class': 'slide_model_d_dots', 'id': 'dots'}).t(safe_detail);
    e.i('div', {'class': 'slide_dot slide_dot_on', 'id': 'dot_1'}).t(dots);
    e.i('div', {'class': 'slide_dot slide_dot_off', 'id': 'dot_2'}).t(dots);
  }
}
