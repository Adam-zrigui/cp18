import { addMovie } from '@/api/MovieConfig';
import { movie } from '@/interface';
import errorHandler from '@/utils/EH';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
export default function useMut() {
    const [error, setError] = React.useState("");
    const {mutate , isLoading} = useMutation((values : movie) => addMovie(values), {
        onError: (err) => {
setError(errorHandler(err))
        }
    })
    return { mutate, isLoading , error}
}
