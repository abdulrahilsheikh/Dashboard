import { GridColDef } from "@mui/x-data-grid";

export const generateProductionColums = (data: any[]): GridColDef[] => {
  let set = new Set();
  for (let i of data) {
    set = new Set([...set.values(), ...i.sizes]);
  }
  const list: GridColDef[] = [
    {
      field: "styleName",
      headerName: "Style Name",
      renderHeader: (param) => (
        <div className="font-bold">{param.colDef.headerName}</div>
      ),
    },
  ];
  [...set.values()].forEach((item: any) => {
    list.push({
      field: item,
      headerName: item,
      minWidth: 200,
      renderHeader: (param) => (
        <div className="font-bold">{param.colDef.headerName}</div>
      ),
      renderCell: (param) => {
        console.log(param);

        return param.row.sizes.includes(param.colDef.field) ? (
          <input className="border border-slate-600 h-10 w-44 text-lg" />
        ) : (
          <></>
        );
      },
    });
  });
  return list;
};
export const getStyles = () => [
  { id: 1, styleName: "Style 1", sizes: ["S", "M", "L"] },
  { id: 2, styleName: "Style 2", sizes: ["M", "L", "XL"] },
  { id: 3, styleName: "Style 3", sizes: ["S", "M", "L"] },
  { id: 4, styleName: "Style 4", sizes: ["XL", "XXL"] },
  { id: 5, styleName: "Style 5", sizes: ["S", "M", "L"] },
];

export const getBomChart = () => [
  {
    id: 1,
    styleName: "Style 1",
    items: [{ name: "item A", qtty: 10, req: 2, available: 5 }],
  },
  {
    id: 2,
    styleName: "Style 2",
    items: [{ name: "item B", qtty: 10, req: 2, available: 5 }],
  },
  {
    id: 3,
    styleName: "Style 3",
    items: [{ name: "item C", qtty: 10, req: 2, available: 5 }],
  },
  {
    id: 4,
    styleName: "Style 4",
    items: [{ name: "item D", qtty: 10, req: 2, available: 5 }],
  },
  {
    id: 5,
    styleName: "Style 5",
    items: [
      { name: "item E", qtty: 10, req: 2, available: 5 },
      { name: "item E", qtty: 10, req: 2, available: 5 },
    ],
  },
];

export const generateBomChart = (data: any[]): GridColDef[] => {
  let set = new Set();
  for (let i of data) {
    set = new Set([...set.values(), ...i.items]);
  }
  const list: GridColDef[] = [
    {
      field: "styleName",
      headerName: "Style Name",
      hideable: false,
      renderHeader: (param) => (
        <>
          <div className="font-bold">{param.colDef.headerName}</div>
        </>
      ),
    },
  ];
  const temp = [...set.values()];
  temp.forEach((item: any) => {
    list.push({
      field: item.name,
      headerName: item.name,

      renderHeader: (param) => (
        <div className="flex flex-col h-full items-center justify-center">
          <div className="font-bold h-1/2">{param.colDef.headerName}</div>
        </div>
      ),
      width: 250,
      renderCell: (param) => {
        const idx = temp.findIndex((a: any) => a.name == param.colDef.field);

        return (
          <div className="flex gap-2   items-center">
            <div className="flex-1">
              Qtty : {Math.round(Math.random() * 100)}
            </div>
            <input className="border border-slate-600 h-10 w-10  text-lg" />
            <div className="flex-1">Req: {Math.round(Math.random() * 100)}</div>
            <div className="flex-1">
              Avail : {Math.round(Math.random() * 100)}
            </div>
          </div>
        );
      },
    });
  });
  return list;
};
