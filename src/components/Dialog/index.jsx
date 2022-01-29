/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";
import ReadMoreReact from "read-more-react";

import { useDialog } from "../../context/dialog";

import * as C from "./styles";

const Dialog = ({ selectedMovieData }) => {
  const { dialogIsOpen, setDialogIsOpen } = useDialog();

  return (
    <C.Container dialogIsOpen={dialogIsOpen}>
      <C.Background onClick={() => setDialogIsOpen(false)} />
      <C.DialogArea>
        <C.DialogHeader>
          <h4>MovieInfo</h4>
          <C.GrCloseIcon onClick={() => setDialogIsOpen(false)} />
        </C.DialogHeader>
        <C.MovieInfoArea>
          <C.PosterSide>
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovieData.poster_path}`}
              alt={selectedMovieData.title}
            />
          </C.PosterSide>
          {/* <hr /> */}
          <C.InfoSide>
            <h4>
              <span>Titulo Original: </span>
              {selectedMovieData.title}
            </h4>
            <h5>
              <span>Data de lançamento: </span>
              {moment(selectedMovieData.release_date).format("L")}
            </h5>
            <h5>
              <span>Avaliação: </span>
              {selectedMovieData.vote_average}
            </h5>
            {selectedMovieData.overview && (
              <h5>
                <span>Descrição: </span>
                {selectedMovieData.overview}
              </h5>
            )}
          </C.InfoSide>
        </C.MovieInfoArea>
      </C.DialogArea>
    </C.Container>
  );
};

export default Dialog;
