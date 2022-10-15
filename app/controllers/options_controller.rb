class OptionsController < ApplicationController
    def show
        option = Option.where(question_id: params[:question_id])
        render json: info, status: 200
       end
   
       def destroy
           option = Option.find(params[:id])
           option.destroy
       end
   
       def update
           option = Option.find(params[:id])
           updatedOption = option.update(optionParams)
           render json: updatedOption
       end
   
       private 
   
       def optionParams
           params.permit(:question_id, :correct, :text)
       end
end
