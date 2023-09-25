import Context from "@/Libs/Store";
import React, { useContext } from "react";

function Table() {
  const { state } = useContext(Context);

  const { table } = state.quiz_state;

  return (
    <table className="border table-fixed text-center">
      <thead className="bg-neutral-600 text-white ">
        <tr>
          <th className="w-20 py-2">Ciclo</th>
          <th className="w-20">Ritmo</th>
          <th className="w-20">Choque</th>
          <th className="w-20">RCP</th>
          <th className="w-20">Coach</th>
          <th className="w-40">Drogas</th>
          <th className="w-20">Outros</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr>
          <td className="py-2">
            {table[1].Ciclo !== null ? (
              <p className="p-1 bg-green-400">{table[1].Ciclo}</p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].Ritmo !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].Ritmo}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].Choque !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].Choque}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].RCP !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].RCP}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].Coach !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].Coach}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].Drogas !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].Drogas}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[1].Outros !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[1].Outros}
              </p>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td className="py-2">
            {table[2].Ciclo !== null ? (
              <p className="p-1 bg-green-400">{table[2].Ciclo}</p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].Ritmo !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].Ritmo}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].Choque !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].Choque}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].RCP !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].RCP}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].Coach !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].Coach}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].Drogas !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].Drogas}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[2].Outros !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[2].Outros}
              </p>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td className="py-2 ">
            {table[3].Ciclo !== null ? (
              <p className="p-1 bg-green-400">{table[3].Ciclo}</p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].Ritmo !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].Ritmo}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].Choque !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].Choque}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].RCP !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].RCP}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].Coach !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].Coach}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].Drogas !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].Drogas}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[3].Outros !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[3].Outros}
              </p>
            ) : (
              ""
            )}
          </td>
        </tr>
        <tr>
          <td className="py-2">
            {table[4].Ciclo !== null ? (
              <p className="p-1 bg-green-400">{table[4].Ciclo}</p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].Ritmo !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].Ritmo}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].Choque !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].Choque}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].RCP !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].RCP}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].Coach !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].Coach}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].Drogas !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].Drogas}
              </p>
            ) : (
              ""
            )}
          </td>
          <td className="py-2">
            {table[4].Outros !== null ? (
              <p className="p-1 bg-green-400 text-white rounded">
                {table[4].Outros}
              </p>
            ) : (
              ""
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
