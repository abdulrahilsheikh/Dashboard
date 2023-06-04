export const getUrl = ({ page, search, size }: any) => {
  return `http://103.94.110.212:85/malad/boilerplate/scripts/server_processing.php?draw=2&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=5&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=${
    page * size
  }&length=${size ? size : 10}&search%5Bvalue%5D=${
    search ? search : ""
  }&search%5Bregex%5D=false&_=1685185317697`;
};

export const getItemsData = async (params: any) => {
  const data = await fetch(getUrl(params));
  const res = await data.json();
  console.log(res);

  return res;
};

export const urlConst = {
  activtyIn: "activity_in",
  activtyOut: "activity_out",
  groupOut: "group_out",
  groupIn: "group_in",
  itemIn: "item_in",
  itemout: "item_out",
  locationout: "location_out",
  locationin: "location_in",
  partyin: "party_in",
  partyout: "party_out",
  processout: "process_out",
  processin: "process_in",
  sizeout: "size_out",
  sizein: "size_in",
  sty_gen_in: "sty_gen_in",
  sty_gen_out: "sty_gen_out",
  sty_bom_out: "sty_bom_out",
  sty_bom_in: "sty_bom_in",
  sty_prod_in: "sty_prod_in",
  sty_prod_out: "sty_prod_out",
  sty_op_in: "sty_op_in",
  sty_op_out: "sty_op_out",
  sty_pic_out: "sty_pic_out",
  sty_pic_in: "sty_pic_in",
  sty_spec_in: "sty_spec_in",
  sty_spec_out: "sty_spec_out",
  unit_in: "unit_in",
  unit_out: "unit_out",
};
export const getPartyData = async (params: any) => {
  const data = await fetch(
    "http://103.94.110.212:85/malad/api/master/party_out.php"
  );
  const res = await data.json();
  console.log(res);

  return res;
};
export const sendToParty = async (data: any) => {
  const res = await fetch(
    "http://103.94.110.212:85/malad/api/master/party_in.php",
    {
      method: "POST",
      body: JSON.stringify({ data: data }),
    }
  );
  const s = await res.json();
  console.log(s);
};
export const getData = async (url: string, params: any) => {
  const data = await fetch(
    `http://103.94.110.212:85/malad/api/master/${url}.php`
  );
  const res = await data.json();
  console.log(res);

  return res;
};
export const sendData = async (url: string, data: any) => {
  const res = await fetch(
    `http://103.94.110.212:85/malad/api/master/${url}.php`,
    {
      method: "POST",
      body: JSON.stringify({ data: data }),
    }
  );
  const s = await res.json();
  console.log(s);
};

export const search = async (url: string, data: any) => {
  const res = await fetch(
    `http://103.94.110.212:85/malad/api/master/master_search.php?search=user&module=party`
  );
  const s = await res.json();
  console.log(s);
};
