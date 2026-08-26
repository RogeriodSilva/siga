export default function Welcome() {
      return (
            <div className="flex flex-col space-y-4 p-2">
                  <p className="flex flex-col space-y-2 justify-center my-auto h-100">
                        <div className="flex flex-col">
                              <span className="text-lg font-medium">
                                    Seja bem-vind@
                              </span>
                              <span className="text-2xl font-thin">
                                    SIGA Extension
                              </span>
                        </div>

                        <div className="text-justify">
                              Extensão visa facilita a usabilidade de
                              algumas funções do sistema. Essa extensão não cria
                              nenhum{" "}
                              <span className="italic font-medium">script</span>{" "}
                              apenas utiliza funções ou eventos já criado no
                              SIGA.
                        </div>
                  </p>
            </div>
      );
}
