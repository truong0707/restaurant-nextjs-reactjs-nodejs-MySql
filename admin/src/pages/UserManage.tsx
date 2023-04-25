import MasterLayoutAdmin from "../layouts/MasterLayout";
import CardUser from "../components/card/CardUser";
import ButtonGroupSelect from "../components/button/btnGroup/ButtonGroupSelect";
import ShowModalForm from "../components/modal/ShowModalForm";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import AlertError from "../components/alert/AlertError";
import Loading from "../components/loading/CircleLoading";


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
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Courses</h1>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <ShowModalForm />

            <ButtonGroupSelect indexRole={indexRole} setIndexRole={setIndexRole}  />
            {/* <ButtonGroupSelect /> */}
          </div>
        </div>

        <p
          style={{
            background: "#EEEEEE",
            width: "100%",
            height: "1px",
            marginTop: "15px  ",
          }}
        ></p>

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

