import MasterLayoutAdmin from "../../layouts/MasterLayout";
import CardUser from "../../components/card/CardUser";
import ButtonGroupSelect from "../../components/button/btnGroup/ButtonGroupSelect";
import ShowModalForm from "../../components/modal/ShowModalForm";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import AlertError from "../../components/alert/AlertError";
import Loading from "../../components/loading/CircleLoading";
import FilterMenu from "../../components/filterMenu/FilterMenu";


export default function UserManage() {
  const dataUserStore = useSelector(
    (state: RootState) => state.users.dataUser
  );
  const userStore = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const { isLoading, error, messageError } = userStore;
  const [indexRole, setIndexRole] = useState(0);

  useEffect(() => {
    dispatch(getDataUser({
      role: indexRole,
    }));
  }, [dispatch, indexRole]);

  return (
    <div>
      <MasterLayoutAdmin>
        <FilterMenu titleFilter="Courses" indexRole={indexRole} setIndexRole={setIndexRole} />

        <div className="wrap_bodyContent_admin">
          {isLoading ? (  
            <Loading />
          ) : (
            <>
              {error ? (
                <AlertError messageError={messageError} />
              ) : (
                <>
                  {dataUserStore ? (
                    <>
                      {dataUserStore.map((data: any) => (
                        <div key={data.id}>
                          <CardUser
                            id={data.id}
                            name={data.name}
                            decription="ss"
                          />
                        </div>
                      ))}
                    </>
                  ) : null}
                </>
              )}
            </>
          )}
        </div>
      </MasterLayoutAdmin>
    </div>
  );
}

