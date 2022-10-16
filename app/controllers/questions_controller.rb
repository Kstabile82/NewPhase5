class QuestionsController < ApplicationController
    def create
        q = Question.create(qparams)
        render json: q, status: 200
    end
   
    def show
        q = Question.where(information_id: params[:information_id])
        render json: q, status: 200
    end
   
    def destroy
       q = Question.find(params[:id])
       q.destroy
    end
   
    def update
        q = Question.find(params[:id])
        updatedQ = q.update(qParams)
        render json: updatedQ
    end

    private

    def qParams
        params.permit(:information_id, :text, :idx)
    end

end
